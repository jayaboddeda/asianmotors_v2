import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./globals.css";
import "./style.css";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Asian Motors",
  description: "Asian Motors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NHHCPBHP');
          `}
        </Script>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T3G0PV409Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T3G0PV409Y');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} position-relative`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NHHCPBHP" height="0" width="0" style={{display: 'none', visibility: 'hidden'}} /></noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
