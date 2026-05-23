"use client";
import { useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitContact, type FormState } from "@/app/actions";

const initialState: FormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full font-ja text-[14px] font-medium tracking-[.08em] text-white bg-gradient-to-br from-purple to-[#4f1db5] py-4 px-8 rounded-[3px] border-none cursor-none transition-all duration-300 hover:shadow-[0_12px_32px_rgba(124,58,237,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none relative overflow-hidden"
      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          送信中...
        </span>
      ) : (
        "無料AI相談を申し込む →"
      )}
    </button>
  );
}

const categories = [
  "Claude導入支援",
  "ChatGPT導入支援",
  "AI業務改善",
  "AI社内研修",
  "AIツール選定",
  "AI営業構築",
  "その他・まず相談したい",
];

export default function ContactForm() {
  const [state, action] = useFormState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success" && formRef.current) {
      formRef.current.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={action} className="space-y-5">
      {/* Row: company + name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="company" label="会社名" required placeholder="株式会社〇〇" />
        <Field id="name" label="お名前" required placeholder="山田 太郎" />
      </div>

      {/* Row: email + phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="email" label="メールアドレス" required type="email" placeholder="info@example.com" />
        <Field id="phone" label="電話番号" placeholder="03-0000-0000" />
      </div>

      {/* Category */}
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="font-ja text-[12px] font-medium tracking-[.06em] text-txt-2">
          相談カテゴリ
        </label>
        <select
          id="category"
          name="category"
          className="bg-bg-card border border-white/[.07] rounded-[3px] px-4 py-3.5 font-ja text-[14px] text-txt-1 outline-none focus:border-cyan/50 transition-colors duration-200 appearance-none cursor-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
        >
          <option value="">選択してください（任意）</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-ja text-[12px] font-medium tracking-[.06em] text-txt-2">
          相談内容 <span className="text-cyan">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="現在の課題・お悩み・ご質問などを自由にご記入ください。&#10;（例：人材会社で採用業務を効率化したい / まず何から始めればいいか知りたい）"
          className="bg-bg-card border border-white/[.07] rounded-[3px] px-4 py-3.5 font-ja text-[14px] text-txt-1 placeholder:text-txt-3 outline-none focus:border-cyan/50 transition-colors duration-200 resize-none leading-[1.8]"
        />
      </div>

      {/* Privacy */}
      <label className="flex items-start gap-3 cursor-none group">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-0.5 w-4 h-4 border border-white/[.2] rounded-sm bg-transparent accent-cyan cursor-none"
        />
        <span className="font-ja text-[12px] font-light leading-[1.7] text-txt-2">
          <a href="/privacy" className="text-cyan hover:underline">プライバシーポリシー</a>に同意する
        </span>
      </label>

      {/* Status messages */}
      {state.status === "success" && (
        <div className="border border-cyan/30 bg-cyan/[.06] rounded-[3px] p-4">
          <p className="font-ja text-[13px] font-light text-cyan leading-[1.8]">
            ✓ {state.message}
          </p>
        </div>
      )}
      {state.status === "error" && (
        <div className="border border-red-500/30 bg-red-500/[.06] rounded-[3px] p-4">
          <p className="font-ja text-[13px] font-light text-red-400 leading-[1.8]">
            {state.message}
          </p>
        </div>
      )}

      {/* Submit */}
      <SubmitButton />

      <p className="font-ja text-[11px] text-txt-3 text-center leading-[1.7]">
        ※ 無料・勧誘なし・2営業日以内にご返信します
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-ja text-[12px] font-medium tracking-[.06em] text-txt-2">
        {label} {required && <span className="text-cyan">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-bg-card border border-white/[.07] rounded-[3px] px-4 py-3.5 font-ja text-[14px] text-txt-1 placeholder:text-txt-3 outline-none focus:border-cyan/50 transition-colors duration-200"
      />
    </div>
  );
}
