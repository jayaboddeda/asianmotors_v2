import OurShowroomPage from "@/components/pages/OurShowroomPage";

export const metadata = {
    title: "Used Car Showroom in Attapur Hyderabad | Asian Motors",
    description: "Visit Asian Motors showroom at Attapur Inner Ring Road, Pillar No. 68. Trusted preowned car showroom in Hyderabad with luxury cars & customer-first service.",
    alternates: {
        canonical: "https://www.asianmotors.co.in/used-car-showroom-attapur"
    }
}

const OurShowroom =() =>{
    return (
        <>
            <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Asian Motors Showroom",
  "image": "https://www.asianmotors.co.in/showroom.jpg",
  "url": "https://www.asianmotors.co.in/used-car-showroom-attapur",
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
  "description": "Visit Asian Motors showroom in Attapur, Hyderabad. Trusted preowned car showroom with verified service history, non-accident cars, buy-back guarantee, and 6-month warranty."
}`}
            </script>
            <OurShowroomPage/>
        </>
    )
}
export default OurShowroom;
