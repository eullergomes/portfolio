'use client';

import ButtonLanguage from './ButtonLanguage';
import './header.css';
import { useState } from 'react';

interface HeaderProps {
  home: string;
  about: string;
  skills: string;
  projects: string;
  contact: string;
}

const Header = ({ home, about, skills, projects, contact }: HeaderProps) => {
  /*============= Change Background Header =============*/
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY >= 10) {
      header?.classList.add('scroll-header');
      setActiveNav('#home');
    } else header?.classList.remove('scroll-header');

    if (window.scrollY >= 560) {
      setActiveNav('#about');
    }

    if (window.scrollY >= 1250) {
      setActiveNav('#skills');
    }

    // if (window.scrollY >= 1800) {
    //   setActiveNav('#projects');
    // }

    if (window.scrollY >= 1850) {
      setActiveNav('#contact');
    }
  });

  /*============= Toggle Menu =============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          {`<Euller/>`}
        </a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className="uil uil-apps nav__icon"></i> {home}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={
                  activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className="uil uil-user nav__icon"></i> {about}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav('#skills')}
                className={
                  activeNav === '#skills'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> {skills}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav('#projects')}
                className={
                  activeNav === '#projects'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-image-v nav__icon"></i> {projects}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === '#contact'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-message nav__icon"></i> {contact}
              </a>
            </li>

            <li className="nav__item" id="swap-lang">
              <a className="nav__link">
                <ButtonLanguage />
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
