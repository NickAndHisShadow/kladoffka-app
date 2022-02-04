import * as React from 'react'
import Image from 'next/image'

import Slider from "react-slick";
import { ChevronDownSmallIcon } from '../public/svgs'
import { formatCurrencyValue } from '../utils/format-currency-value'
import Markdown from 'markdown-to-jsx';
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductPageUI({ product }) {
  const activeCurrency = {code: 'UAH'}

  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="lg:flex -mx-6">
      <div className="mb-8 sm:px-0 md:px-6 md:mb-0 lg:w-1/2">
        <Slider {...settings}>
          {product.images.map(image => {
            return (
                    <div className="w-full overflow-hidden relative bg-gainsboro" key={image.id}>
                      <Image

                          src={image.url}
                          height={image.height/2}
                          width={image.width/2}
                          quality={70}
                          alt={product.name}
                          title={product.name}
                      />
                    </div>
                )
          })}

        </Slider>
      </div>

      <div className="px-6 md:py-3 lg:w-1/2">
        <h1 className="font-bold text-xl md:text-5xl mb-3 text-primary leading-tight">
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
        </div>

        <p className="my-1.5">Замовити по телефону</p>
        <div className="grid sm:grid-cols-4 lg:grid-cols-3">
          <div className="col-span-2 grid grid-rows-2 grid-flow-col">
            <div className="row-span-3">
              <Link href="tel:0674964002">
                <button className="flex border-2 border-green-600 py-2 px-2.5 rounded-xl font-semibold text-lg text-green-600 transition-colors hover:bg-green-600 hover:text-white">
                  Зателефонувати
                </button>
              </Link>
            </div>

            <div className="col-span-1">
              <Link href="tel:0674964002">
                <span>+380674964002</span>
              </Link>
            </div>

            <div className="col-span-1">
              <Link href="tel:0661754266">
                <span>+380661754266</span>
              </Link>
            </div>

          </div>
        </div>

        <div className="mb-6 mt-24">
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
