import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Omniroute from "@/components/Omniroute";
import Industries from "@/components/Industries";
import Flow from "@/components/Flow";
import Works from "@/components/Works";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Solution />
        <Services />
        <Omniroute />
        <Industries />
        <Flow />
        <Works />
        <About />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
