import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LogoIntro } from "@/components/motion/LogoIntro";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LogoIntro />
      <Navbar />
      <main className="w-full flex-1 pt-20">{children}</main>
      <Footer />
    </>
  );
}
