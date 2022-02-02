import SEO from "../components/seo";
import getPageData from "../lib/get-page-data";

const ReturnPage = () => {
    return (
        <>
            <SEO title="Return" />
            <div>
                contact page
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

export default ReturnPage