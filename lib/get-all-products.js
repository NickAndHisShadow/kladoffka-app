import graphcmsClient, { gql } from './graphcms-client'
import { ProductCardFragment } from './graphql-fragments'

export const getAllProductsQuery = gql`
  query AllProductsQuery($locale: Locale!) {
    products(locales: [$locale, en]) {
      ...ProductCardFragment
    }
  }

  ${ProductCardFragment}
`

async function getAllProducts({ locale = 'uk' }) {
  const { products } = await graphcmsClient.request(getAllProductsQuery, {
    locale
  })

  return {
    products
  }
}

export default getAllProducts
