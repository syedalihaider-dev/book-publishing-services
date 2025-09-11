// Top of the File: Global imports
import 'bootstrap/dist/css/bootstrap.min.css';    // Bootstrap CSS
import "slick-carousel/slick/slick.css";          // Slick Slider CSS
import "slick-carousel/slick/slick-theme.css";    // Slick Theme CSS
import "./globals.css";                           // Custom CSS

// Next imports
import Header from "../components/Header";        // Import Header
import { Lexend } from "next/font/google";        // Import Google Font

// Font setup
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"], 
});

// Metadata
export const metadata = {
  title: "Best Award Winning Book Publishing Services Near You",
  description: "We offer the best book publishing services at an affordable price. Get in touch with us today and publish your book on one of the reputable platform.",
};

// Layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
