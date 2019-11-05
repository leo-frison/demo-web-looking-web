import * as React from 'react'
import Section from '../Section';
import './styles.scss'

const Contact: React.FunctionComponent = () => (
  <Section title="Contact." id="contact" size="auto" theme="dark">
    <div className="contact">
      <div className="contact__items">
        <div className="contact__item">
          <h2 className="contact__title">Address</h2>
          <span>
            Tractieweg, 41<br />
            3534 AP, Utrecht <br />
            Netherlands
          </span>
        </div>

        <div className="contact__item">
          <h2 className="contact__title">Email</h2>
          <a href="mailto:info@techmill.nl">info@techmill.nl</a>
        </div>

        <div className="contact__item">
          <h2 className="contact__title">Phone</h2>
          <span>+31 (0) 30 22 70 730</span>
        </div>
      </div>

      <img className="contact__logo" src="/static/images/logo-white.png" alt=""/>
      <span className="contact__year">{ new Date().getFullYear() }</span>
    </div>

    <div className="map">
      <iframe
        width="100%"
        height="100%"
        src="https://maps.google.com/maps?q=Tractieweg%2041,%20Studio%20B&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        scrolling="no" />
    </div>
  </Section>
)

export default React.memo(Contact)