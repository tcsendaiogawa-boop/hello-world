"use server";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const company = (formData.get("company") as string)?.trim();
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const category = (formData.get("category") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  // Validation
  if (!company || !name || !email || !message) {
    return { status: "error", message: "必須項目をすべてご入力ください。" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "有効なメールアドレスを入力してください。" };
  }

  // Send to external email service (Resend, SendGrid, etc.)
  // Replace the block below with your actual email provider.
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.CONTACT_EMAIL ?? "info@truecolors.ai";

  if (RESEND_API_KEY) {
    const body = `
会社名: ${company}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || "未入力"}
相談カテゴリ: ${category || "未選択"}

【相談内容】
${message}
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "True Colors Website <noreply@truecolors.ai>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `【無料AI相談】${company} 様よりお問い合わせ`,
        text: body,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", await res.text());
      return { status: "error", message: "送信に失敗しました。しばらく後にお試しください。" };
    }
  } else {
    // Dev mode: just log
    console.log("CONTACT FORM SUBMISSION:", { company, name, email, phone, category, message });
  }

  return { status: "success", message: "お問い合わせを受け付けました。担当者より2営業日以内にご連絡いたします。" };
}
