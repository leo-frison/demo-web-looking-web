import * as React from 'react'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  useEffect(() => {
    [
      'background-utrecht.jpg',
      'background-amsterdam.jpg',
      'logo-white.png'
    ].forEach(picture => new Image().src = `/static/images/${picture}`);
  }, []);

  return (
    <Layout title="Welcome!">
      <Hero />
    </Layout>
  )
}

export default IndexPage
