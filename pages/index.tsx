import * as React from 'react'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import RecruitmentModal from '../components/RecruitmentModal'
import Clients from '../components/Clients'
import Tools from '../components/Tools'
import Vision from '../components/Vision'
import Contact from '../components/Contact'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  useEffect(() => {
    [
      'background-utrecht.jpg',
      'background-amsterdam.jpg',
      'background-rotterdam.jpg',
      'logo-white.png'
    ].forEach(picture => new Image().src = `/static/images/${picture}`)

    const cities = ['amsterdam', 'rotterdam', 'utrecht']
    const city = cities[Math.floor(Math.random()*cities.length)]

    document.body.classList.add(city)
  }, [])

  const [showModal, setModalVisibility] = useState(true)

  return (
    <Layout>
      <RecruitmentModal
        closeModal={() => setModalVisibility(false)}
        show={showModal}
      />
      <Hero openModal={() => setModalVisibility(true)} />
      <Clients />
      <Tools />
      <Vision />
      <Contact />
    </Layout>
  )
}

export default IndexPage
