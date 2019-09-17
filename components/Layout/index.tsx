import * as React from 'react'
import Head from 'next/head'
import { SEO } from '../../config'
import Header from '../Header'
import './styles.scss'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title }) => (
  <div>
    <Head>
      <title>{`${SEO.title} - ${title}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={SEO.description} />
      <meta name="keywods" content={SEO.keywords.join('')} />
    </Head>

    <Header />

    { children }
  </div>
)

export default Layout
