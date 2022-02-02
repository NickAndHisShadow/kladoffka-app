import Link from 'next/link'
import { useState } from "react";

function Header({pages = []}) {
    const [ activeNav, setActiveNav] = useState(true)
    const handleClick = () => {
        setActiveNav(!activeNav)
    }

    return (
        <header className="mx-auto bg-white/95 items-center justify-between z-10 fixed w-full px-4 sm:px-6">
                <nav className="container py-6 flex flex-wrap justify-between items-center mx-auto unselectable">

                    <button className="md:hidden mr-8 text-black outline-none" onClick={handleClick}>
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

                    <ul className={`${ activeNav ? '' : 'hidden' } md:flex-grow items-start order-2 w-full md:w-auto md:order-first`}>
                        <li key="Головна" className="block my-4 md:inline-block md:my-0">
                            <Link href="/">
                                <a className="text-lightgray hover:text-slategray hover:bg-gainsboro rounded-full py-2 px-3 font-medium">
                                    Головна
                                </a>
                            </Link>
                        </li>
                    {pages.length ? (pages.map((page) => (
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
                    ))) : null}
                    </ul>

                    <div id="button-wrapper" className="lg:mr-6">
                        <Link href="tel:0674964002">
                            <button className="flex border-2 border-green-600 rounded-2xl py-2 px-3 font-semibold text-green-600 transition-colors hover:bg-green-600 hover:text-white">
                                Зателефонувати
                            </button>
                        </Link>
                    </div>

                </nav>
        </header>
    )
}

export default Header
