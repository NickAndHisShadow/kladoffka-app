import { useRouter } from 'next/router'
import Link from 'next/link'

function Footer({ categories = [], collections = [] }) {
    const router = useRouter()

    const currentYear = new Date().getUTCFullYear()

    return (
        <footer className="bg-white" aria-labelledby="footerHeading">
            <h2 id="footerHeading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-4">
                        <div className="space-y-12 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
                            {categories.length ? (
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                        Категорії
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        {categories.map((category) => (
                                            <li key={category.id}>
                                                <Link
                                                    href={`/${category.type.toLowerCase()}/${
                                                        category.slug
                                                    }`}
                                                >
                                                    <a className="text-base text-gray-500 hover:text-gray-900">
                                                        {category.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                            {collections.length ? (
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                        Колекції
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        {collections.map((collection) => (
                                            <li key={collection.id}>
                                                <Link
                                                    href={`/${collection.type.toLowerCase()}/${
                                                        collection.slug
                                                    }`}
                                                >
                                                    <a className="text-base text-gray-500 hover:text-gray-900">
                                                        {collection.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                        Інформація
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        <li key='delivery'>
                                            <Link
                                                href={`/delivery/`}
                                            >
                                                <a className="text-base text-gray-500 hover:text-gray-900">
                                                    Доставка
                                                </a>
                                            </Link>
                                        </li>
                                        <li key='vozvrat'>
                                            <Link
                                                href={`/delivery/`}
                                            >
                                                <a className="text-base text-gray-500 hover:text-gray-900">
                                                    Повернення
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                    <div className="mt-12 xl:mt-0">

                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">

                    </div>
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; {currentYear} Kladoffka Store
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
