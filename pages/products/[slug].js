import getAllProducts from '../../lib/get-all-products'
import getProductBySlug from '../../lib/get-product-slug'
import getPageData from '../../lib/get-page-data'
import ProductPageUI from '../../components/product-page-ui'
import SEO from '../../components/seo'

function ProductPage({ product }) {
  const [primaryImage] = product.images
  return (
    <>
      <SEO title={product.name} {...product} />
      <div>
        <div itemType="https://schema.org/Product" itemScope>
          <meta itemProp="name" content={product.name}/>
          <link itemProp="image" href={primaryImage.url}/>
          <meta itemProp="description" content={product.description.text}/>
          <div itemProp="brand" itemType="https://schema.org/Brand" itemScope>
            <meta itemProp="name" content="Kladoffka"/>
          </div>
          <div itemProp="offers" itemType="https://schema.org/Offer" itemScope>
            <link itemProp="url" href={product.slug}/>
            <meta itemProp="itemCondition" content="https://schema.org/NewCondition"/>
            <meta itemProp="availability" content="https://schema.org/InStock"/>
            <meta itemProp="price" content={product.price}/>
            <meta itemProp="priceCurrency" content="UAH"/>
            <meta itemProp="priceValidUntil" content="2023-02-03"/>
            <div itemProp="shippingDetails" itemType="https://schema.org/OfferShippingDetails" itemScope>
              <div itemProp="shippingRate" itemType="https://schema.org/MonetaryAmount" itemScope>
                <meta itemProp="value" content="115"/>
                <meta itemProp="currency" content="UAH"/>
              </div>
              <div itemProp="shippingDestination" itemType="https://schema.org/DefinedRegion" itemScope>
                <meta itemProp="addressCountry" content="UA"/>
              </div>
              <div itemProp="deliveryTime" itemType="https://schema.org/ShippingDeliveryTime" itemScope>
                <div itemProp="handlingTime" itemType="https://schema.org/QuantitativeValue" itemScope>
                  <meta itemProp="minValue" content="0"/>
                  <meta itemProp="maxValue" content="1"/>
                </div>
                <div itemProp="transitTime" itemType="https://schema.org/QuantitativeValue" itemScope>
                  <meta itemProp="minValue" content="1"/>
                  <meta itemProp="maxValue" content="3"/>
                </div>
                <meta itemProp="cutOffTime" content="18:00-08:00"/>
                <div itemProp="businessDays" itemType="https://schema.org/OpeningHoursSpecification" itemScope>
                  <meta itemProp="dayOfWeek" content="https://schema.org/Monday"/>
                  <meta itemProp="dayOfWeek" content="https://schema.org/Tuesday"/>
                  <meta itemProp="dayOfWeek" content="https://schema.org/Wednesday"/>
                  <meta itemProp="dayOfWeek" content="https://schema.org/Thursday"/>
                  <meta itemProp="dayOfWeek" content="https://schema.org/Friday"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductPageUI product={product} />
    </>
  )
}

ProductPage.layout = "App"

export async function getStaticPaths() {
  let paths = []

    const { products } = await getAllProducts()

    paths = [
      ...paths,
      ...products.map((product) => ({
        params: { slug: product.slug }
      }))
    ]

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData()
  const { product } = await getProductBySlug({
    slug: params.slug
  })

  return {
    props: {
      product,
      ...pageData
    }
  }
}

export default ProductPage
