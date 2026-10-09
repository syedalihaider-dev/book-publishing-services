"use client";

import { usePathname } from "next/navigation";
import { Header, Footer, MarqueeSlider, Popup } from "@/components/layout";
import ChatWidget from "@/components/ChatWidget";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminBlog = pathname?.startsWith("/admin-blog");
  const isUserBlog = pathname?.startsWith("/blog");

  if (isAdminBlog) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      <MarqueeSlider />
      {/* Timed popup overlays the full viewport and blocks blog chrome links */}
      {!isUserBlog ? <Popup /> : null}
      <ChatWidget />
    </>
  );
}
