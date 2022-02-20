import { CartProvider } from 'react-use-cart'

import '../public/standardise.css'

import 'tailwindcss/tailwind.css'

import AppLayout from "../components/layouts/app-layout";
import LandingLayout from "../components/layouts/landing-layout";

const layouts = {
    App: AppLayout,
    Landing: LandingLayout,
};

function MyApp({Component, pageProps}) {
    const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
    return (
            <CartProvider>
                <Layout {...pageProps}>
                <Component {...pageProps} />
                </Layout>
            </CartProvider>
    )
}

export default MyApp
