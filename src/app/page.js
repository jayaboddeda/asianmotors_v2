const { default: HomePage } = require("@/components/pages/HomePage")

export const metadata = {
    title: "Luxury Preowned Cars Showroom in Hyderabad | Asian Motors Attapur",
    description: "Explore the best preowned car showroom in Hyderabad at Asian Motors, Attapur. Building trust since 1969, offering non-accident cars, transparent documentation, buy-back guarantee, and 6 months warranty.",
    alternates: {
        canonical: "https://www.asianmotors.co.in/"
    }
}

const Home =() =>{
    return (
        <>
            <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Asian Motors",
  "image": "https://www.asianmotors.co.in/logo.png",
  "@id": "https://www.asianmotors.co.in/",
  "url": "https://www.asianmotors.co.in/",
  "telephone": "+919391037686",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Galaxy, Deluxe Colony, Janaki Nagar Colony, Toli Chowki",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500008",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.385044",
    "longitude": "78.486671"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/asianmotors",
    "https://www.instagram.com/asianmotors"
  ]
}`}
            </script>
            <HomePage/>
        </>
    )
}
export default Home;
