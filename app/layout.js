import { Lexend } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Header, Footer, MarqueeSlider, Popup } from "@/components/layout";
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
      <head>
        {/* ✅ Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5WPMZ7WC');`}
        </Script>
        {/* ✅ End Google Tag Manager */}
      </head>

      <body className={lexend.className}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WPMZ7WC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* ✅ End Google Tag Manager (noscript) */}

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
