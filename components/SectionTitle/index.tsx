import * as React from 'react'
import './styles.scss'

interface Props {
  as?: string;
  theme?: string;
  children: React.ReactNode;
}

const SectionTitle: React.FunctionComponent<Props> = ({
  as = 'h1',
  theme = 'light',
  children,
}) => {
  return React.createElement(as, {
    className: `section__title section__title--${theme}`
  }, children)
}

export default React.memo(SectionTitle)