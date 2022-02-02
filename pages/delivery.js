import SEO from "../components/seo";
import getPageData from "../lib/get-page-data";

const DeliveryPage = () => {
    return (
        <>
            <SEO title="Delivery" />
            <div>
                delivery page
            </div>
        </>
    )
}

export async function getStaticProps() {
    const pageData = await getPageData()

    return {
        props: {
            ...pageData
        }
    }
}

export default DeliveryPage