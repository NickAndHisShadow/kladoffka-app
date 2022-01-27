import graphcmsClient, { gql } from './graphcms-client'
import { CollectionFragment } from './graphql-fragments'

export const getAllCollectionsQuery = gql`
  query AllCollectionsQuery() {
    collections() {
      ...CollectionFragment
    }
  }

  ${CollectionFragment}
`

async function getAllCollections() {
  const { collections } = await graphcmsClient.request(getAllCollectionsQuery)

  return { collections }
}

export default getAllCollections
