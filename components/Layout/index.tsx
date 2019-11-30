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
      <meta property="og:title" content="Techmill" />
      <meta property="og:site_name" content="Techmill - Next level automation engineering" />
      <meta property="og:url" content="https://techmill.nl" />
      <meta property="og:description" content="Best team of Automation Engineers in The Netherlands" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/static/images/techmill-description.jpg" />
      <link href={SEO.images.favicon} rel="shortcut icon" />
    </Head>

    <Header />

    { children }
  </>
)

export default React.memo(Layout)
