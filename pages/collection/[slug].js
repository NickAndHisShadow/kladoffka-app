import getAllCollections from '../../lib/get-all-collections'
import getCollectionBySlug from '../../lib/get-collection-slug'
import getPageData from '../../lib/get-page-data'
import ProductGrid from '../../components/product-grid'
import SEO from '../../components/seo'

function CollectionPage({ collection }) {
  return (
    <>
      <SEO title={collection.name} {...collection} />
      <ProductGrid products={collection.products} />
    </>
  )
}

CollectionPage.layout = "App"

export async function getStaticPaths() {
  let paths = []

    const { collections } = await getAllCollections()

    paths = [
      ...paths,
      ...collections.map((collection) => ({
        params: { slug: collection.slug }
      }))
    ]

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData()
  const { collection } = await getCollectionBySlug({
    slug: params.slug
  })

  return {
    props: {
      collection,
      ...pageData
    }
  }
}

export default CollectionPage
