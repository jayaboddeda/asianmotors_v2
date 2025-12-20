import EmiCalculatorPage from "@/components/pages/EmiCalculatorPage";

export const metadata = {
    title: "Car EMI Calculator Hyderabad | Flexible Preowned Car Loans",
    description: "Calculate your EMI for preowned cars in Hyderabad. Asian Motors provides hassle-free financing with flexible EMI options for luxury used cars.",
    alternates: {
        canonical: "https://www.asianmotors.co.in/car-emi-calculator"
    }
}

const EmiCalculator =() =>{
    return (
        <>
            <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Car EMI Calculator - Asian Motors",
  "url": "https://www.asianmotors.co.in/car-emi-calculator",
  "operatingSystem": "All",
  "applicationCategory": "FinanceApplication",
  "description": "Use Asian Motors EMI Calculator to estimate monthly payments for your preowned car purchase in Hyderabad. Flexible financing with quick approvals.",
  "provider": {
    "@type": "Organization",
    "name": "Asian Motors",
    "url": "https://www.asianmotors.co.in/"
  }
}`}
            </script>
            <EmiCalculatorPage/>
        </>
    )
}
export default EmiCalculator;
