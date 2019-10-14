import * as React from 'react'
import Head from 'next/head'
import { SEO } from '../../config'
import Header from '../Header'
import './styles.scss'

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <Head>
      <title>{SEO.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={SEO.description} />
      <meta name="keywods" content={SEO.keywords.join('')} />
      <link href={SEO.images.favicon} rel="shortcut icon" />
    </Head>

    <Header />

    { children }
  </>
)

export default React.memo(Layout)
