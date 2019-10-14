import * as React from 'react'
import './styles.scss'

interface Props {
  openModal: () => void;
}

const Hero: React.FunctionComponent<Props> = ({ openModal }) => {
  const [height, setHeight] = React.useState<string|number>('auto')

  React.useEffect(() => {
    const isMobile = window.innerWidth < 500
    const headerSize = 76
    const defaultMargin = 140
    const mobileMargin = 176;
    const componentHeight = (window.innerHeight - headerSize - defaultMargin)
    const mobileComponentHeight = (window.outerHeight - mobileMargin)

    setHeight(isMobile ? mobileComponentHeight : componentHeight)

  }, [])

  return (
    <section
      className="hero container"
      style={{ height }}
    >
      <h2 className="hero__title">
        We are hiring people
      </h2>
      <h2 className="hero__title hero__title--second">
        to take automation engineering
      </h2>
      <h2 className="hero__title hero__title--third">
        to a whole <span className="hero__gradient">new level</span>
      </h2>

      <a href="#" onClick={openModal} className="hero__button">
        Apply now!
      </a>

      <div className="hero__arrow">
        <i aria-hidden="true" className="hero__bounce" />
      </div>
    </section>
  )

}

export default React.memo(Hero)
