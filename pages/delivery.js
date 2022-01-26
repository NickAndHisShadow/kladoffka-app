import SEO from "../components/seo";
import { Fragment } from "react";
import getPageData from "../lib/get-page-data";

const DeliveryPage = () => {
    return (
        <Fragment>
            <SEO title="Delivery" />
            <div>
                delivery page
            </div>
        </Fragment>
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