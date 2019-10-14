import * as React from 'react'
import SectionTitle from '../SectionTitle';
import './styles.scss'

interface Props {
  title: string;
  id: string;
  theme?: 'dark' | 'light';
  size?: 'auto' | 'fullscreen';
  children: React.ReactNode;
}

const Section: React.FunctionComponent<Props> = ({
  title,
  theme = 'light',
  size = 'fullscreen',
  id,
  children,
}) => {
  const [height, setHeight] = React.useState<string|number>('auto')
  React.useEffect(() => {
    size === 'fullscreen' && setHeight(window.innerHeight - 200)
  }, [])

  return (
    <section
      id={id}
      className={`section section--${theme}`}
      style={{ height }}
    >
      <div className="section__content container">
        <SectionTitle theme={theme}>{ title }</SectionTitle>

        { children }
      </div>
    </section>
  )
}

export default Section