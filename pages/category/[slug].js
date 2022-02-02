import * as React from 'react'

import getAllCategories from '../../lib/get-all-categories'
import getCategoryBySlug from '../../lib/get-category-slug'
import getPageData from '../../lib/get-page-data'
import ProductGrid from '../../components/product-grid'
import SEO from '../../components/seo'

function CategoryPage({ category }) {
  return (
    <>
      <SEO title={category.name} {...category} />
      <ProductGrid products={category.products} />
    </>
  )
}

export async function getStaticPaths() {
  let paths = []

    const { categories } = await getAllCategories()

    paths = [
      ...paths,
      ...categories.map((category) => ({
        params: { slug: category.slug }
      }))
    ]

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData()
  const { category } = await getCategoryBySlug({
    slug: params.slug
  })

  return {
    props: {
      category,
      ...pageData
    }
  }
}

export default CategoryPage
