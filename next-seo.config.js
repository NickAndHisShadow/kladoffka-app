const description =
  'Товари українського виробництва - садж, казан, коптильня,  та багато іншого! Швидка доставка по всім регіонам.'
const title = 'Kladoffka Shop - господарські товари для дому та саду, активного відпочинку і кулінарного бізнесу'
const url = 'https://kladoffka.com.ua'

const seo = {
  title,
  titleTemplate: '%s | GraphCMS',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  twitter: {
    handle: '@kladoffka.shop',
    site: '@kladoffka.shop'
  }
}

export { seo as defaultSeo, url as defaultUrl }
