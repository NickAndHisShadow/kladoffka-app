import * as React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useCart } from 'react-use-cart'

import { ChevronDownSmallIcon } from '../public/svgs'
import { formatCurrencyValue } from '../utils/format-currency-value'
import Markdown from 'markdown-to-jsx';
import Link from "next/link";
import {CallButton} from "./ui/callButton";

function ProductPageUI({ product }) {
  console.log(product.description)
  const { addItem } = useCart()
  const router = useRouter()
  const activeCurrency = {code: 'UAH'}
  const [variantQuantity, setVariantQuantity] = React.useState(1)
  const updateQuantity = (event) => setVariantQuantity(Number(event.target.value))

  const [primaryImage] = product.images

  const addToCart = () => {
    const itemMetadata = router.locales.reduce(
      (acc, locale) => ({
        ...acc,
        [locale]: {
          ...product.localizations.find(
            (localization) => localization.locale === locale
          )
        }
      }),
      {}
    )

    addItem(
      {
        id: activeVariantId,
        productId: product.id,
        image: product.images[0],
        price: product.price,
        ...itemMetadata
      },
      variantQuantity
    )
  }

  return (
    <div className="lg:flex -mx-6">
      <div className="mb-8 px-6 md:mb-0 lg:w-1/2">
        <div className="w-full overflow-hidden relative bg-gainsboro rounded-lg">
          <Image
            src={primaryImage.url}
            height={primaryImage.height}
            width={primaryImage.width}
            quality={45}
            alt={product.name}
            title={product.name}
          />
        </div>
      </div>
      <div className="px-6 md:py-3 lg:w-1/2">
        <h1 className="font-bold text-2xl md:text-5xl mb-3 text-primary leading-tight">
          {product.name}
        </h1>
        <div className="mb-6">
          <p className="font-semibold text-2xl text-slategray">
            {formatCurrencyValue({
              currency: activeCurrency,
              value: product.price
            })}
          </p>
        </div>
        <div className="md:flex md:flex-wrap -mx-3">
          {product.variants.length > 1 ? (
              <div className="md:w-3/4 px-3 mb-6">
                <label
                    className="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray"
                    htmlFor="style"
                >
                  Конфігурація
                </label>
                <div className="relative">
                  <select
                      id="style"
                      name="style"
                      value={activeVariantId}
                      className="block appearance-none w-full bg-gainsboro border-2 border-gainsboro focus:border-slategray px-4 py-3 pr-8 focus:outline-none focus:bg-white text-slategray focus:text-slategray rounded-lg"
                      onChange={updateVariant}
                  >
                    {product.variants.map((variant) => (
                        <option key={variant.id} value={variant.id}>
                          {variant.name}
                        </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <ChevronDownSmallIcon
                        className="h-4 w-4 text-gray-400"
                        aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
          ) : null}
          <div className="md:w-1/4 px-3 mb-6">
            <label
                className="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray"
                htmlFor="quantity"
            >
              Кількість
            </label>
            <div className="relative">
              <select
                  id="quantity"
                  name="quantity"
                  value={variantQuantity}
                  className="block appearance-none w-full bg-gainsboro border-2 border-gainsboro focus:border-slategray px-4 py-3 pr-8 focus:outline-none focus:bg-white text-slategray focus:text-slategray rounded-lg"
                  onChange={updateQuantity}
              >
                {Array.from({ length: 5 }, (_, i) => {
                  const value = Number(i + 1)

                  return (
                      <option key={value} value={value}>
                        {value}
                      </option>
                  )
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                <ChevronDownSmallIcon
                    className="h-4 w-4 text-gray-400"
                    aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="my-1.5">Замовити по телефону</p>
        <Link href="tel:0674964002">
          <CallButton/>
        </Link>
        <div className="mb-6">
          <h3 className="block text-xl font-bold tracking-widest uppercase text-center mt-4 mb-2 text-slategray">
            Опис
          </h3>
          <Markdown className="leading-loose text-lightgray">{product.description.markdown}</Markdown>
        </div>

      </div>
    </div>
  )
}

export default ProductPageUI
