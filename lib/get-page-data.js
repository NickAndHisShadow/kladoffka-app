import graphcmsClient, { gql } from './graphcms-client'
import { CategoryFragment, CollectionFragment } from './graphql-fragments'

export const getPageDataQuery = gql`
  query PageDataQuery {
    footerCategories: categories(first: 4) {
      ...CategoryFragment
      type: __typename
    }
    footerCollections: collections(first: 4) {
      ...CollectionFragment
      type: __typename
    }
    navigationCategory: categories(first: 1) {
      ...CategoryFragment
      type: __typename
    }
    navigationCollection: collections(first: 1) {
      ...CollectionFragment
      type: __typename
    }
  }

  ${[CategoryFragment, CollectionFragment]}
`

async function getPageData() {
  const {
    footerCategories,
    footerCollections,
    navigationCategory,
    navigationCollection
  } = await graphcmsClient.request(getPageDataQuery)

  return {
    footer: { categories: footerCategories, collections: footerCollections },
    navigation: { pages: [...navigationCategory, ...navigationCollection] }
  }
}

export default getPageData
