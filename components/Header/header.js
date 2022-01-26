import Link from 'next/link'
import {useCart} from 'react-use-cart'

import {formatCurrencyValue} from '../../utils/format-currency-value'

//import {Logo} from '../public/svgs'
import {ShoppingCartIcon} from '../../public/svgs'

function Header({pages = []}) {
    const {cartTotal} = useCart()
    const activeCurrency = {code: 'UAH'}

    return (
        <header className="max-w-7xl mx-auto bg-white items-center justify-between px-4 sm:px-6">
            <div className="py-6 w-full">
                <nav className="container flex flex-wrap justify-between items-center mx-auto unselectable">

                    <button className="md:hidden mr-8 text-black outline-none">
                        <svg
                            className='w-8 h-8'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>

                    <Link href="/">
                        <a className="hidden md:block">
                            <span>
                                Головна
                            </span>
                        </a>
                    </Link>

                    {pages.length ? (
                        <ul className="hidden md:block md:flex-grow">
                            {pages.map((page) => (
                                <li
                                    key={page.id}
                                    className="block my-4 md:inline-block md:my-0"
                                >
                                    <Link href={`/${page.type.toLowerCase()}/${page.slug}`}>
                                        <a className="text-lightgray hover:text-slategray hover:bg-gainsboro rounded-full py-2 px-3 font-medium">
                                            {page.name}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                    <Link href="tel:0674964002">
                        <a className="flex border-2 border-green-600 rounded-2xl py-2 px-3 font-semibold text-green-600 transition-colors lg:mr-6 hover:bg-green-600 hover:text-white">
                            Зателефонувати
                        </a>
                    </Link>
                    <div className="flex items-center">
                        <Link href="/cart/">
                            <a className="flex space-x-2">
                                <ShoppingCartIcon
                                    className="h-6 w-6 text-gray-400"
                                    aria-hidden="true"
                                />
                                <span className="text-gray-900">
                  {formatCurrencyValue({
                      currency: activeCurrency,
                      value: cartTotal
                  })}
                </span>
                            </a>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
