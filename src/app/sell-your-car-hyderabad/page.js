import SellYourCarPage from "@/components/pages/SellYourCarPage";

export const metadata = {
    title: "Sell Your Car in Hyderabad | Hassle-Free Car Selling at Asian Motors",
    description: "Get the best resale value for your car in Hyderabad. Asian Motors offers transparent documentation, instant valuation, and quick ownership transfer in 3 working days.",
    alternates: {
        canonical: "https://www.asianmotors.co.in/sell-your-car-hyderabad"
    }
}

const SellYourCar =() =>{
    return (
        <>
            <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Car Selling Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Asian Motors",
    "image": "https://www.asianmotors.co.in/logo.png",
    "url": "https://www.asianmotors.co.in/sell-your-car-hyderabad",
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
  "description": "Sell your car in Hyderabad with Asian Motors. Get instant valuation, best resale value, transparent documentation, and ownership transfer within 3 days."
}`}
            </script>
            <SellYourCarPage/>
        </>
    )
}
export default SellYourCar;
