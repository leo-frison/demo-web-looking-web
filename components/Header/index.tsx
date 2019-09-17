import * as React from 'react'
import scrollToElement from 'scroll-to-element'
import './styles.scss'

interface LinkProps {
  link: string;
  title: string;
}

const Link: React.FunctionComponent<LinkProps> = ({ link, title }) => {
  const strollTo = (location: string) => (): void => {
    scrollToElement(location);
  }

  return (
    <a href={link} onClick={strollTo(link)} className="header__link">
      { title }
    </a>
  )
}

const Header: React.FunctionComponent = () => (
  <header className="header">
    <nav className="header__wrapper container">
      <ul className="header__list">
        <li className="header__item">
          <Link link="#customer" title="Customers" />
        </li>

        <li className="header__item">
          <Link link="#techniques" title="Techniques" />
        </li>

        <li className="header__item">
          <Link link="#vision" title="Vision" />
        </li>

        <li className="header__item header__margin">
          <h1 className="header__logo visually-hidden">Techmill</h1>
        </li>

        <li className="header__item">
          <Link link="#solutions" title="Solutions" />
        </li>

        <li className="header__item">
          <Link link="#innovation" title="Inovation" />
        </li>

        <li>
          <Link link="#contact" title="Contact" />
        </li>
      </ul>
    </nav>
  </header>
)

export default Header