import { DefaultSeo } from 'next-seo'

import { defaultSeo } from '../../next-seo.config'
import Link from "next/link";
import {InstagramIcon, TelegramIcon, ViberIcon} from "../../public/svgs";

function LandingLayout({ children }) {
    return (
        <>
            <DefaultSeo {...defaultSeo} />
            <nav className="bg-sky-500 px-1.5 sm:px-4 py-2 rounded-b-2xl drop-shadow-lg">
                <div className="container flex flex-nowrap justify-between items-center mx-auto">
                    <div className="flex flex-nowrap gap-x-3">
                        <Link href="https://google.com/">
                        <span>
                             <InstagramIcon className="h-8 w-8" />
                        </span>
                        </Link>
                        <Link href="https://google.com/">
                        <span>
                             <TelegramIcon className="h-8 w-8" />
                        </span>
                        </Link>
                        <Link href="https://google.com/">
                        <span>
                             <ViberIcon className="h-8 w-8" />
                        </span>
                        </Link>
                    </div>
                    <p className="text-purple-600 font-bold">
                         +38 (098) 468 55 59
                    </p>
                </div>
            </nav>
            <div className="max-w-7xl mx-auto">{children}</div>
        </>
    )
}

export default LandingLayout
