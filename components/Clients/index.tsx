import * as React from 'react'
import Section from '../Section';
import './styles.scss'

const Clients: React.FunctionComponent = () => (
  <Section title="Customers." size="auto" id="customers">
    <div className="customers">
      <img
        title="KLM"
        alt="KLM"
        src="/static/images/logos/klm.png"
        height="50"
      />

      <img
        title="Tele2"
        alt="Tele2"
        src="/static/images/logos/tele2.png"
        height="40"
      />

      <img
        title="T-Mobile"
        alt="T-Mobile"
        src="/static/images/logos/t-mobile.png"
        height="30"
      />

      <img
        title="Ebay"
        alt="Ebay"
        src="/static/images/logos/ebay.png"
        height="50"
      />

      <img
        title="Rabobank"
        alt="Rabobank"
        src="/static/images/logos/rabobank.png"
        height="70"
      />
    </div>
  </Section>
)

export default React.memo(Clients)