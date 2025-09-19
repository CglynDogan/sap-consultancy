"use client";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../ui/ScrollToTop";
import { HeaderProps } from "@/types";

interface LayoutProps extends HeaderProps {
  children: React.ReactNode;
}

export default function Layout({
  children,
  companyName = "Tech Solutions",
  variant = "tech-solutions",
  buttonText = "Get a Quote",
}: LayoutProps) {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header
          companyName={companyName}
          variant={variant}
          buttonText={buttonText}
        />
        <div className="px-3 xs:px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-3 xs:py-5">
          <div className="layout-content-container flex flex-col max-w-6xl flex-1 w-full">
            {children}
          </div>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
