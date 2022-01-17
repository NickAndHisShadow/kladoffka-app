import Link from 'next/link'
import Image from 'next/image'

import { formatCurrencyValue } from '../utils/format-currency-value'

function ProductCard({ id, images, name, price, slug }) {
  const activeCurrency = {code: 'UAH'}
  const namePreview = (name) => {
    if (name.length >= 80) {
      let newName = name.substr(0, 80)
      return newName.slice(0, newName.lastIndexOf(' ')) + '...'
    }
  }
  const [primaryImage] = images

  function handleMouseOver() {

  }

  return (
    <article className="unselectable" key={id} onMouseOver={handleMouseOver}>
      <Link href={`/products/${slug}`}>
        <a className="group no-underline w-full h-full flex">
          <div className="bg-gray-50 rounded-lg cursor-pointer w-full overflow-hidden relative px-3 py-6 md:px-6">
            {primaryImage ? (
              <Image
                src={primaryImage.url}
                height={primaryImage.height}
                width={primaryImage.width}
                quality={20}
                alt={name}
                title={name}
              />
            ) : null}

            <div className="pt-3 md:pt-6 text-center">
              <p className="text-gray-800 font-semibold text-lg group-hover:text-indigo-600 mb-1">
                {namePreview(name)}
              </p>
              <p className="text-gray-400 text-sm">
                {formatCurrencyValue({
                  currency: activeCurrency,
                  value: price
                })}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default ProductCard
