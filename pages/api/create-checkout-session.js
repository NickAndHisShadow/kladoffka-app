import graphcmsClient, { gql } from '../../lib/graphcms-client'

export default async (req, res) => {
  try {
    const { currency, items, locale, success_url, ...rest } = req.body

    const getProduct = async (id) => {
      const {
        product: { description, images, name, price, ...product }
      } = await graphcmsClient.request(
        gql`
          query ProductQuery($id: ID!, $locale: Locale!) {
            product(where: { id: $id }, locales: [$locale]) {
              productId: id
              description
              images(first: 1) {
                url
              }
              name
              price
            }
          }
        `,
        {
          id,
          locale
        }
      )

      return {
        currency,
        product_data: {
          description,
          metadata: {
            ...product
          },
          name,
          images: images.map((img) => img.url)
        },
        unit_amount: price
      }
    }

    const line_items = await Promise.all(
      items.map(async (item) => ({
        adjustable_quantity: {
          enabled: true,
          minimum: 1
        },
        price_data: await getProduct(item.productId),
        quantity: item.quantity
      }))
    )



    res.status(201).json()
    console.log(res)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'There was a problem creating the Stripe Checkout session'
    })
  }
}
