import * as React from 'react'
import { useState } from 'react'
import scrollToElement from 'scroll-to-element'
import './styles.scss'

interface LinkProps {
  link: string;
  title: string;
  onClick: () => void;
}

const Link: React.FunctionComponent<LinkProps> = ({ link, title, onClick }) => {
  const strollTo = (location: string) => (): void => {
    onClick()

    scrollToElement(location, {
      offset: 0,
      ease: 'inOutQuint',
	    duration: 1500,
    })
  }


  return (
    <a href={link} onClick={strollTo(link)} className="header__link">
      { title }
    </a>
  )
}

const Header: React.FunctionComponent = () => {
  const [showMenu, setMenuVisibility] = useState(false)
  const headerClass = showMenu ? 'header--active' : ''
  const headerWrapperClass = showMenu ? 'header__wrapper--active' :  ''

  const setMenuState = () => setMenuVisibility(!showMenu)
  const hideMenu = () => setMenuVisibility(false)

  return (
    <header className={`header ${headerClass}`}>
      <nav className="header__mobile">
        <h1 className="header__logo header__logo-mobile visually-hidden">
          Techmill
        </h1>

        <button className="header__hamburger" onClick={setMenuState}>
        </button>
      </nav>

      <nav className={`header__wrapper container ${headerWrapperClass}`}>
        <button className="header__close" onClick={setMenuState}>
        </button>

        <ul className="header__list">
          <li className="header__item">
            <Link link="#customers" title="Customers" onClick={hideMenu} />
          </li>

          <li className="header__item">
            <Link link="#tools" title="Tools" onClick={hideMenu} />
          </li>

          {/* <li className="header__item">
            <Link link="#vision" title="Vision" onClick={hideMenu} />
          </li> */}

          <li className="header__item header__margin">
            <h1 className="header__logo visually-hidden">Techmill</h1>
          </li>

          <li className="header__item">
            <Link link="#vision" title="Vision" onClick={hideMenu} />
          </li>

          {/* <li className="header__item">
            <Link link="#innovation" title="Inovation" onClick={hideMenu} />
          </li> */}

          <li className="header__item">
            <Link link="#contact" title="Contact" onClick={hideMenu} />
          </li>
        </ul>

        <h1 className="header__logo header__logo-bottom visually-hidden">
          Techmill
        </h1>
      </nav>
    </header>
  )
}


export default React.memo(Header)