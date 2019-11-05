import * as React from 'react'
import Section from '../Section'
import './styles.scss'

const Vision: React.FunctionComponent = () => (
  <Section title="Vision." id="vision" size="auto">
    <div className="vision">
      <img src="/static/images/vision.png" height={300} />

      <div className="vision__list">
        <div className="vision__item">
          <div className="vision__content">
            <h2 className="vision__title">Focus</h2>
            <span>The world of IT is constantly changing. TechMill focusses on ensuring our employees keep up with the newest technologies and tools. We do this by creating a relaxed working environment where everything can be asked without feeling embarrassed. Going to (international) conferences and support courses by having a study budget of 3000 Euro and 5 days. Other than that TechMill organizes 3 'innovation days' per year at the TechMill office to try out something new, share knowledge and connect with colleagues.</span>
          </div>
        </div>

        <div className="vision__item">
          <div className="vision__content">
            <h2 className="vision__title">Fun</h2>
            <span>Happy employees deliver good work. This is truly something TechMill believes and will try its best to help wherever they can. A max of 25 employees makes sure we keep it personal and flexible in any way possible. What type of fun activities we will do, will be decided by the employees. Are we going skiing in the Alps or surfing in Portugal?</span>
          </div>
        </div>

        <div className="vision__item">
        <div className="vision__content">
          <h2 className="vision__title">More than work</h2>
          <span>Since TechMill is all about the best international Test Automation Engineers, we understand that moving or living in a new country can be hard. That's why we're offering support on housing, taxes or any other things that may be overwhelming.</span>
        </div>
      </div>
      </div>
    </div>
  </Section>
)

export default React.memo(Vision)