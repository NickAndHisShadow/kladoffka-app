import getAllProducts from '../lib/get-all-products'
import getPageData from '../lib/get-page-data'
import ProductGrid from '../components/product-grid'

function IndexPage({ products }) {
    return <ProductGrid products={products} />
}

export async function getStaticProps() {
    const pageData = await getPageData()
    const { products } = await getAllProducts()

    return {
        props: { ...pageData, products }
    }
}

export default IndexPage
