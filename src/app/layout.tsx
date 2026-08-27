import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adnanhabib.com"),
  title: "Adnan Habib | Technology Consultant, Ecommerce Strategist & AI Solutions Expert Dubai",
  description:
    "Adnan Habib is a premium Technology Consultant, Ecommerce Strategist, AI Solutions Expert, and Dubai Business Concierge. Get Shopify Plus development, custom Web App engineering, AWS cloud scaling, workflow AI automations, and local business representation in Dubai.",
  keywords: [
    "Adnan Habib",
    "Technology Consultant Dubai",
    "Ecommerce Strategist UAE",
    "AI Solutions Expert Dubai",
    "Dubai Business Concierge",
    "Shopify Plus Developer Dubai",
    "WooCommerce Development UAE",
    "Amazon UAE Seller Consultant",
    "Noon Seller Account UAE",
    "AWS Cloud Migration Consultant Dubai",
    "AI Chatbots Dubai",
    "Make Automation Specialist UAE",
    "Custom PHP Web Applications Dubai",
    "Wordpress Developer Dubai",
    "local representative Dubai",
    "supplier verification UAE",
    "property inspection Dubai",
    "technical SEO specialist Dubai",
    "conversion rate optimization UAE"
  ],
  authors: [{ name: "Adnan Habib", url: "https://adnanhabib.com" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://adnanhabib.com/"
  },
  openGraph: {
    type: "website",
    url: "https://adnanhabib.com/",
    title: "Adnan Habib | Technology Consultant, Ecommerce Strategist & AI Solutions Dubai",
    description:
      "Helping businesses worldwide build, scale, and operate successfully through custom web technology, Shopify Plus ecommerce, AI automation, and trusted Dubai business support.",
    images: [
      {
        url: "/images/portrait.png",
        width: 1200,
        height: 630,
        alt: "Adnan Habib - Technology Consultant Dubai"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan Habib | Technology Consultant & Ecommerce Strategist Dubai",
    description:
      "Helping businesses worldwide build, scale, and operate successfully through custom web technology, Shopify Plus ecommerce, AI automation, and trusted Dubai business support.",
    images: ["/images/portrait.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon.png", type: "image/png" }
    ],
    apple: [{ url: "/images/favicon.png" }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://adnanhabib.com/#person",
                name: "Adnan Habib",
                jobTitle: "Technology Consultant, Ecommerce Strategist, AI Solutions Expert",
                url: "https://adnanhabib.com",
                image: "https://adnanhabib.com/images/portrait.png",
                sameAs: [
                  "https://www.linkedin.com/in/adnanlatki/",
                  "https://x.com/adnannlatki",
                  "https://www.instagram.com/adnanlatki",
                  "https://www.facebook.com/adnannlatki",
                  "https://www.pinterest.com/adnannlatki/"
                ],
                description:
                  "Technology Consultant, Ecommerce Strategist, and Dubai Business Concierge helping global brands build, scale, and automate operations on the ground and online."
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://adnanhabib.com/#service",
                name: "Adnan Habib Consulting",
                url: "https://adnanhabib.com",
                logo: "https://adnanhabib.com/images/portrait.png",
                image: "https://adnanhabib.com/images/portrait.png",
                telephone: "+971589836436",
                email: "info@adnanhabib.com",
                priceRange: "$$$$",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dubai",
                  addressRegion: "Dubai",
                  addressCountry: "AE"
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "25.2048",
                  longitude: "55.2708"
                },
                areaServed: [
                  { "@type": "AdministrativeArea", name: "Dubai" },
                  { "@type": "AdministrativeArea", name: "Abu Dhabi" },
                  { "@type": "AdministrativeArea", name: "Saudi Arabia" },
                  { "@type": "AdministrativeArea", name: "Global" }
                ],
                knowsAbout: [
                  "Website Development",
                  "Shopify Plus Ecommerce Migration",
                  "AWS Cloud Infrastructure Setup",
                  "AI Chatbot Workflows & Automation",
                  "Dubai Local Business Representation & Supplier Audits",
                  "Technical Search Engine Optimization (SEO)"
                ]
              }
            ])
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F6F2] text-[#171717] font-sans selection:bg-[#A8783E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
