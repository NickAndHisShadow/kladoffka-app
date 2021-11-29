import graphcmsClient, { gql } from './graphcms-client'
import {
  CollectionFragment,
  ProductCardFragment
} from './graphql-fragments'

export const getCollectionSlugQuery = gql`
  query CollectionSlugQuery($locale: Locale!, $slug: String!) {
    collections(where: { slug: $slug }, locales: [$locale, en]) {
      ...CollectionFragment
      products {
        ...ProductCardFragment
      }
    }
  }

  ${[CollectionFragment, ProductCardFragment]}
`

async function getCollectionBySlug({ locale = 'uk', slug }) {
  const {
    collections: [collection]
  } = await graphcmsClient.request(getCollectionSlugQuery, {
    locale,
    slug
  })

  return {
    collection
  }
}

export default getCollectionBySlug
