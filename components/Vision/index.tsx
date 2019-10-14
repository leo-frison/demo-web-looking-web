import * as React from 'react'
import Section from '../Section';
import './styles.scss'

const Vision: React.FunctionComponent = () => (
  <Section title="Vision." id="vision" size="auto">
    <div className="vision">
      <img src="/static/images/vision.png" height={300} />

      <div className="vision__list">
        <div className="vision__item">
          <div className="vision__content">
            <h2 className="vision__title">Focus</h2>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit doloribus quasi ipsa voluptates vero, facere, blanditiis eligendi debitis enim quam distinctio explicabo natus dignissimos id amet culpa aliquid deleniti ipsum.</span>
          </div>
        </div>

        <div className="vision__item">
          <div className="vision__content">
            <h2 className="vision__title">Quality</h2>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit doloribus quasi ipsa voluptates vero, facere, blanditiis eligendi debitis enim quam distinctio explicabo natus dignissimos id amet culpa aliquid deleniti ipsum.</span>
          </div>
        </div>

        <div className="vision__item">
        <div className="vision__content">
          <h2 className="vision__title">Bleeding Edge</h2>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit doloribus quasi ipsa voluptates vero, facere, blanditiis eligendi debitis enim quam distinctio explicabo natus dignissimos id amet culpa aliquid deleniti ipsum.</span>
        </div>
      </div>
      </div>
    </div>
  </Section>
)

export default React.memo(Vision)