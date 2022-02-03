import Link from 'next/link'
import { useState, useEffect } from "react"
import useWindowDimensions from "../hooks/use-window-dimensions";

function Header({pages = []}) {
    const { height, width } = useWindowDimensions()
    useEffect(() => {
        (width < 768) ? setActiveNav(false) : setActiveNav(true)
    }, [width]);

    const [ activeNav, setActiveNav] = useState(null)



    const handleClick = () => {
        if (width < 768) {
            setActiveNav(!activeNav)
        }
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
                        <li key="Головна" className="block my-4 md:inline-block md:my-0" onClick={handleClick}>
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
                            onClick={handleClick}
                        >
                            <Link href={`/${page.type.toLowerCase()}/${page.slug}`}>
                                <a className="text-lightgray hover:text-slategray hover:bg-gainsboro rounded-full py-2 px-3 font-medium">
                                    {page.name}
                                </a>
                            </Link>
                        </li>
                    ))) : null}
                    </ul>

                    <div id="call-wrapper" className="lg:mr-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            <div className="col-span-2 grid grid-rows-2 grid-flow-col gap-x-1.5 lg:gap-x-6">
                                <div className="row-span-3">
                                    <Link href="tel:0674964002">
                                        <button className="flex border-2 border-green-600 py-2 px-1.5 rounded-xl font-semibold text-lg text-green-600 transition-colors hover:bg-green-600 hover:text-white">
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
                    </div>



                </nav>
        </header>
    )
}

export default Header
