import { CartProvider } from 'react-use-cart'

import '../public/standardise.css'

import 'tailwindcss/tailwind.css'

import Layout from "../components/layout";

function MyApp({Component, pageProps}) {
    return (
            <CartProvider>
                <Layout {...pageProps}>
                <Component {...pageProps} />
                </Layout>
            </CartProvider>
    )
}

export default MyApp
