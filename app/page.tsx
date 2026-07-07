import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfterSection";
import Gallery from "./components/Gallery";
import MidCta from "./components/MidCta";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import TrustBar from "./components/TrustBar";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
<TrustBar />
<Trust />
<Services />
<BeforeAfter />
<Gallery />
<MidCta />
<Process />
<Reviews />
<Faq />
<Contact />
      </main>

      <Footer />
      <FloatingButton />
    </>
  );
}