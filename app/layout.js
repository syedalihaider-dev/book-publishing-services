import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"], 
});

export const metadata = {
  title: "Best Award Winning Book Publishing Services Near You",
  description: "We offer the best book publishing services at an affordable price. Get in touch with us today and publish your book on one of the reputable platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
