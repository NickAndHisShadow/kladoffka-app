import SEO from "../components/seo";
import { Fragment } from "react";
import getPageData from "../lib/get-page-data";

const ReturnPage = () => {
    return (
        <Fragment>
            <SEO title="Return" />
            <div>
                return page
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

export default ReturnPage