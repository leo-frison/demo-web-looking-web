import * as React from 'react'
import './styles.scss'

const Hero: React.FunctionComponent<{}> = () => (
  <section className="hero container">
    <h2 className="hero__title">We are hiring</h2>
    <h2 className="hero__title hero__title--delay">automation engineers</h2>

    <a href="#">Apply now!</a>
  </section>
)

export default Hero
