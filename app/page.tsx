import CTASection from "@/components/app/CTASection";
import FAQ from "@/components/app/FAQ";
import Footer from "@/components/app/Footer";
import Logos from "@/components/app/InfiniteMarquee/Logos";
import HeroSection from "@/components/app/Opening/HeroSection";
import ProcessTimeline from "@/components/app/Process/ProcessTimeline";
import { Services } from "@/components/app/Services/Services";
import Testimonials from "@/components/app/Testimonial/Testimonials";
import { Work } from "@/components/app/Work/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white bg-secondary">
      <HeroSection />
      <div className="w-full h-[12vh] bg-gradient-to-b from-transparent  to-secondary mt-[-16vh]"></div>
      <div className="bg-secondary overflow-hidden">
        <Logos />
      </div>
      <Services />
      <ProcessTimeline />
      <Testimonials />
      <Work />
      <FAQ />
      <CTASection />

      <Footer />
    </div>
  );
}
