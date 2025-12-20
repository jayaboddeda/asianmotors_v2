import AboutPage from "@/components/pages/AboutPage";

export const metadata = {
    title: "About Asian Motors | Best Preowned Car Showroom in Hyderabad Since 1969",
    description: "Discover Asian Motors’ journey of 50+ years as Hyderabad’s trusted preowned car showroom. Upholding ethics, transparency, and quality in luxury used cars.",
    alternates: {
        canonical: "https://www.asianmotors.co.in/about-us"
    }
}


const About =() =>{
    return (
        <>
            <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Asian Motors",
  "url": "https://www.asianmotors.co.in/about-us",
  "mainEntity": {
    "@type": "Organization",
    "name": "Asian Motors",
    "foundingDate": "1969",
    "description": "Asian Motors is Hyderabad’s trusted preowned car showroom since 1969, offering luxury used cars with transparency, ethics, and customer trust.",
    "logo": "https://www.asianmotors.co.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919391037686",
      "contactType": "Customer Service",
      "areaServed": "IN"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Galaxy, Deluxe Colony, Janaki Nagar Colony, Toli Chowki",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500008",
      "addressCountry": "IN"
    }
  }
}`}
            </script>
            <AboutPage/>
        </>
    )
}
export default About;
