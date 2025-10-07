import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Popup from "@/components/layout/Popup";
import { Lexend } from "next/font/google";
import ChatWidget from "@/components/ChatWidget";
// import AOSInitializer from "@/components/AOS/AOSInitializer";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"], 
});

export const metadata = {
  title: "Book Publishing Services",
  description: "We offer the best book publishing services at an affordable price. Get in touch with us today and publish your book on one of the reputable platform.",
  openGraph: {
    title: "Best Award Winning Book Publishing Services Near You",
    description: "We offer the best book publishing services...",
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
    title: "Best Award Winning Book Publishing Services Near You",
    description: "We offer the best book publishing services...",
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
        <Popup />
        <ChatWidget />
        {/* <AOSInitializer /> */}
      </body>
    </html>
  );
}
