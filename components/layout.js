import { DefaultSeo } from 'next-seo'

import { defaultSeo } from '../next-seo.config'
import Footer from './footer'
import Header from './header'

function Layout({ children, footer, navigation }) {
    return (
        <>
            <DefaultSeo {...defaultSeo} />
            <Header {...navigation} />
            <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6">{children}</div>
            <Footer {...footer} />
        </>
    )
}

export default Layout
