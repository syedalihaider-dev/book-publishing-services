import { Lexend } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Header, Footer, MarqueeSlider, Popup } from "@/components/layout";
import ChatWidget from "@/components/ChatWidget";
// import AOSInitializer from "@/components/AOS/AOSInitializer";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "TTop Book Publishing Company in USA | Affordable Services",
  description: "A leading book publishing company in USA offering affordable solutions for authors. From editing to distribution, we make publishing simple and professional.",
  verification: {
    google: "-QvnVvYBh42PmrmnGYheAFUmFQCE8G1i4LzwioSX6GY",
  },
  openGraph: {
    title: "Top Book Publishing Company in USA | Affordable Services",
    description: "A leading book publishing company in USA offering affordable solutions for authors. From editing to distribution, we make publishing simple and professional.",
    url: "https://bookpublishingservices.io",
    siteName: "Book Publishing Services",
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
          })(window,document,'script','dataLayer','GTM-NMSHXXN9');`}
        </Script>
        {/* ✅ End Google Tag Manager */}

        {/* ✅ Organization Schema */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Book Publishing Services",
              "alternateName": "Book Publishing Services in USA",
              "url": "https://bookpublishingservices.io/",
              "logo": "https://bookpublishingservices.io/_next/image?url=%2Flogo.png&w=1920&q=75",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-214-910-6917",
                "contactType": "customer service",
                "areaServed": ["US", "GB"],
                "availableLanguage": "en",
              },
            }),
          }}
        />

        {/* ✅ Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Book Publishing Services",
              "image": "https://bookpublishingservices.io/_next/image?url=%2Flogo.png&w=1920&q=75",
              "@id": "https://bookpublishingservices.io",
              "url": "https://bookpublishingservices.io/",
              "telephone": "+1-214-910-6917",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5301 Alpha Rd Ste 80-21",
                "addressLocality": "Dallas",
                "addressRegion": "TX",
                "postalCode": "75240",
                "addressCountry": "US",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.933842,
                "longitude": -96.81675,
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                "opens": "00:00",
                "closes": "23:59",
              },
            }),
          }}
        />

        {/* ✅ Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Book Publishing Services",
              "url": "https://bookpublishingservices.io/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://bookpublishingservices.io/{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ✅ Breadcrumb Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Book Marketing Services",
                  "item": "https://bookpublishingservices.io/services/book-marketing-services",
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "eBook Writing Services",
                  "item": "https://bookpublishingservices.io/services/ebook-writing-services",
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Contact Us",
                  "item": "https://bookpublishingservices.io/contact",
                },
              ],
            }),
          }}
        />
      </head>

      <body className={lexend.className}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMSHXXN9"
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
