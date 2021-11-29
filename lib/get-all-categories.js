import graphcmsClient, { gql } from './graphcms-client'
import { CategoryFragment } from './graphql-fragments'

export const getAllCategoriesQuery = gql`
  query AllCategoriesQuery($locale: Locale!) {
    categories(locales: [$locale, en]) {
      ...CategoryFragment
    }
  }

  ${CategoryFragment}
`

async function getAllCategories({ locale = 'uk' } = {}) {
  const { categories } = await graphcmsClient.request(getAllCategoriesQuery, {
    locale
  })

  return { categories }
}

export default getAllCategories
