import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MdSearch, MdMenu, MdClose } from 'react-icons/md';
import clsx from 'clsx';
import { menu } from '../constants/menu';
import HeaderStyles from '../styles/HeaderStyles';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
            <div className="mobileIcon">
              <div className="searchIcon">
                <div className="searchIcon__wrapper">
                  <MdSearch />
                </div>
              </div>
              <ActionButton
                className="mobileMenuBtn"
                onClick={() => setIsNavOpen(!isNavOpen)}
                onKeyDown={() => setIsNavOpen(!isNavOpen)}
              >
                <MdMenu />
              </ActionButton>
            </div>
            {isNavOpen && (
              <div
                className="mobileNavBg"
                aria-label="close menu"
                role="button"
                tabIndex={0}
                onClick={() => setIsNavOpen(!isNavOpen)}
                onKeyDown={() => setIsNavOpen(!isNavOpen)}
              />
            )}
            <nav>
              <ActionButton
                className="mobileMenuCloseBtn"
                onClick={() => setIsNavOpen(!isNavOpen)}
                onKeyDown={() => setIsNavOpen(!isNavOpen)}
              >
                <MdClose />
              </ActionButton>
              <ul>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={handleNavItemClick}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="searchIcon">
                  <div className="searchIcon__wrapper">
                    <MdSearch />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
