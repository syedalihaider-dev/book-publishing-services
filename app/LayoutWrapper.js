"use client";

import { usePathname } from "next/navigation";
import { Header, Footer, MarqueeSlider, Popup } from "@/components/layout";
import ChatWidget from "@/components/ChatWidget";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminBlog = pathname?.startsWith("/admin-blog");

  if (isAdminBlog) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      <MarqueeSlider />
      <Popup />
      <ChatWidget />
    </>
  );
}
