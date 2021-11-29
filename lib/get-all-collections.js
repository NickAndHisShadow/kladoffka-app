import graphcmsClient, { gql } from './graphcms-client'
import { CollectionFragment } from './graphql-fragments'

export const getAllCollectionsQuery = gql`
  query AllCollectionsQuery($locale: Locale!) {
    collections(locales: [$locale, en]) {
      ...CollectionFragment
    }
  }

  ${CollectionFragment}
`

async function getAllCollections({ locale = 'uk' } = {}) {
  const { collections } = await graphcmsClient.request(getAllCollectionsQuery, {
    locale
  })

  return { collections }
}

export default getAllCollections
