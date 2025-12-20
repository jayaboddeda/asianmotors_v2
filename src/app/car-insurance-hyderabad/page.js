import InsurancePage from "@/components/pages/InsurancePage";

export const metadata = {
    title: "Preowned Car Insurance in Hyderabad | Asian Motors Support",
    description: "Get the right car insurance for your preowned car in Hyderabad. Transparent policies, quick claim assistance, and expert guidance from Asian Motors.",
    alternates: {
        canonical: "https://www.asianmotors.co.in/car-insurance-hyderabad"
    }
}

const Insurance =() =>{
    return (
        <>
            <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Car Insurance Services",
  "provider": {
    "@type": "Organization",
    "name": "Asian Motors",
    "url": "https://www.asianmotors.co.in/",
    "telephone": "+919391037686",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Galaxy, Deluxe Colony, Janaki Nagar Colony, Toli Chowki",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500008",
      "addressCountry": "IN"
    }
  },
  "url": "https://www.asianmotors.co.in/car-insurance-hyderabad",
  "description": "Get the right preowned car insurance in Hyderabad with Asian Motors. Transparent policies, quick claim assistance, and expert guidance."
}`}
            </script>
            <InsurancePage/>
        </>
    )
}
export default Insurance;
