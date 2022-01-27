import graphcmsClient, { gql } from './graphcms-client'
import { ProductFragment } from './graphql-fragments'

export const getProductsSlugQuery = gql`
  query CollectionSlugQuery($slug: String!) {
    products(where: { slug: $slug }) {
      ...ProductFragment
      localizations(includeCurrent: false) {
        name
        slug
      }
    }
  }

  ${ProductFragment}
`

async function getProductBySlug({slug }) {
  const {
    products: [product]
  } = await graphcmsClient.request(getProductsSlugQuery, {
    slug
  })

  return { product }
}

export default getProductBySlug
