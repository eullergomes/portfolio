'use client';

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
  /*============= Toggle Menu =============*/
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Euller
        </a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-apps nav__icon"></i> {home}
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> {about}
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> {skills}
              </a>
            </li>

            <li className="nav__item">
              <a href="#projecs" className="nav__link">
                <i className="uil uil-image-v nav__icon"></i> {projects}
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> {contact}
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
