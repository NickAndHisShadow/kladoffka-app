import graphcmsClient, { gql } from './graphcms-client'
import { ProductCardFragment } from './graphql-fragments'

export const getAllProductsQuery = gql`
  query AllProductsQuery {
    products {
      ...ProductCardFragment
    }
  }

  ${ProductCardFragment}
`

export default async function getAllProducts() {
  const { products } = await graphcmsClient.request(getAllProductsQuery)

  return {
    products
  }
}
