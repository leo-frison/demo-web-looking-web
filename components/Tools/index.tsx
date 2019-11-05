import * as React from 'react'
import Section from '../Section'
import './styles.scss'

const Tools: React.FunctionComponent = () => (
  <Section title="Tools." theme="dark" id="tools" size="auto">
    <h2 className="tools__title">
      Everything you need to ship<br /> <span>high quality software</span>
    </h2>

    <div className="tools">
      <div className="tools__item">
        <div className="tools__image">
          <img
            title="Webdriver IO"
            alt="Webdriver IO"
            src="/static/images/logos/tools/webdriver.png"
            height="70"
          />
        </div>

        <h2 className="tools__name">Webdriver IO</h2>
      </div>

      <div className="tools__item">
        <div className="tools__image">
          <img
            title="Cypress"
            alt="Cypress"
            src="/static/images/logos/tools/cypress.png"
            height="30"
          />
        </div>

        <h2 className="tools__name">Cypress</h2>
      </div>

      <div className="tools__item">
        <div className="tools__image">
          <img
            title="NUnit"
            alt="NUnit"
            src="/static/images/logos/tools/nunit.png"
            height="40"
          />
        </div>

        <h2 className="tools__name">NUnit</h2>
      </div>

      <div className="tools__item">
        <div className="tools__image">
          <img
            title="JUnit"
            alt="JUnit"
            src="/static/images/logos/tools/junit.png"
            height="30"
          />
        </div>

        <h2 className="tools__name">JUnit</h2>
      </div>

      <div className="tools__item">
        <div className="tools__image">
          <img
            title="Postman"
            alt="Postman"
            src="/static/images/logos/tools/postman.png"
            height="40"
          />
        </div>

        <h2 className="tools__name">Postman</h2>
      </div>

      <div className="tools__item">
        <div className="tools__image">
          <img
            title="Sauce Labs"
            alt="Sauce Labs"
            src="/static/images/logos/tools/saucelabs.png"
            height="20"
          />
        </div>

        <h2 className="tools__name">Sauce Labs</h2>
      </div>

      <div className="tools__item">
        <div className="tools__image">
          <img
            title="Robot Framework"
            alt="Robot Framework"
            src="/static/images/logos/tools/robot-framework.png"
            height="50"
          />
        </div>

        <h2 className="tools__name">RobotFramework</h2>
      </div>

      <div className="tools__item">
        <div className="tools__image">
          <img
            title="Cucumber"
            alt="Cucumber"
            src="/static/images/logos/tools/cucumber.png"
            height="35"
          />
        </div>

        <h2 className="tools__name">Cucumber</h2>
      </div>

      <div className="tools__item">
        <div className="tools__image">
          <img
            title="SpecFlow"
            alt="SpecFlow"
            src="/static/images/logos/tools/specflow.png"
            height="40"
          />
        </div>

        <h2 className="tools__name">SpecFlow</h2>
      </div>

      <div className="tools__item">
        <div className="tools__image">
          <img
            title="Jenkins"
            alt="Jenkins"
            src="/static/images/logos/tools/jenkins.png"
            height="40"
          />
        </div>

        <h2 className="tools__name">Jenkins</h2>
      </div>

      <div className="tools__item">
        <div className="tools__image">
          <img
            title="Docker"
            alt="Docker"
            src="/static/images/logos/tools/docker.png"
            height="35"
          />
        </div>

        <h2 className="tools__name">Docker</h2>
      </div>

      <div className="tools__item">
        <div className="tools__image">
          <img
            title="Selenium"
            alt="Selenium"
            src="/static/images/logos/tools/selenium.png"
            height="60"
          />
        </div>

        <h2 className="tools__name">Selenium</h2>
      </div>
    </div>
  </Section>
)

export default React.memo(Tools)