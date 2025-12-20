import CurrentStockPage from "@/components/pages/CurrentStockPage";

export const metadata = {
    title: "Buy Used Cars in Hyderabad | Luxury Preowned Cars at Asian Motors",
    description: "Browse our current stock of certified preowned cars in Hyderabad. Verified service history, odometer authenticity, transparent documentation & buy-back guarantee.",
    alternates: {
        canonical: "https://www.asianmotors.co.in/buy-used-cars-hyderabad"
    }
}

const CurrentStock =() =>{
    return (
        <>
            <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Buy Used Cars in Hyderabad - Asian Motors Current Stock",
  "url": "https://www.asianmotors.co.in/buy-used-cars-hyderabad",
  "about": "Certified preowned cars with verified history, warranty, and transparent documentation.",
  "mainEntity": [
    {
      "@type": "Product",
      "name": "Luxury Preowned Car",
      "brand": {
        "@type": "Brand",
        "name": "Asian Motors"
      },
      "description": "Certified preowned car with 6-month warranty, odometer authenticity, and verified service history.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.asianmotors.co.in/buy-used-cars-hyderabad"
      }
    }
  ]
}`}
            </script>
            <CurrentStockPage/>
        </>
    )
}
export default CurrentStock;
