import { Lexend } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import {Header, Footer, MarqueeSlider, Popup} from "@/components/layout";
import ChatWidget from "@/components/ChatWidget";
// import AOSInitializer from "@/components/AOS/AOSInitializer";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"], 
});

export const metadata = {
  title: "Top Book Publishing Company in USA | Affordable Services",
  description: "A leading book publishing company in USA offering affordable solutions for authors. From editing to distribution, we make publishing simple and professional.",
  openGraph: {
    title: "Top Book Publishing Company in USA | Affordable Services",
    description: "A leading book publishing company in USA offering affordable solutions for authors. From editing to distribution, we make publishing simple and professional.",
    url: "https://yourdomain.com",
    siteName: "Ask Local Real Estate",
    type: "website",
    images: [
      {
        url: "/public/ft-logo.png",
        width: 300,
        height: 300,
        alt: "Book Publishing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Book Publishing Company in USA | Affordable Services",
    description: "A leading book publishing company in USA offering affordable solutions for authors. From editing to distribution, we make publishing simple and professional.",
    images: ["/public/ft-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Header />
        {children}
        <Footer />
        <MarqueeSlider />
        <Popup />
        <ChatWidget />
        {/* <AOSInitializer /> */}
      </body>
    </html>
  );
}
