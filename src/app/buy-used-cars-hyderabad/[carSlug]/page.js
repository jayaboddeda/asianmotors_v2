const { default: CarDetailsPage } = require("@/components/pages/CarDetailsPage")

const CarDetails = async ({ params }) => {
    const { carSlug } = await params;
    
    return (
        <CarDetailsPage carSlug={carSlug} />
    )
}
export default CarDetails;
