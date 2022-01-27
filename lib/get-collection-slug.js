import graphcmsClient, { gql } from './graphcms-client'
import {
  CollectionFragment,
  ProductCardFragment
} from './graphql-fragments'

export const getCollectionSlugQuery = gql`
  query CollectionSlugQuery($slug: String!) {
    collections(where: { slug: $slug }) {
      ...CollectionFragment
      products {
        ...ProductCardFragment
      }
    }
  }

  ${[CollectionFragment, ProductCardFragment]}
`

async function getCollectionBySlug({ slug }) {
  const {
    collections: [collection]
  } = await graphcmsClient.request(getCollectionSlugQuery, {
    slug
  })

  return {
    collection
  }
}

export default getCollectionBySlug
