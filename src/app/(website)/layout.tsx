import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { LogoIntro } from "@/components/motion/LogoIntro";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SkipLink />
      <LogoIntro />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="w-full flex-1 pt-20 outline-none">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
