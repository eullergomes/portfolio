'use client';

import {
  FileText,
  Home,
  Image,
  LayoutGrid,
  SendHorizonal,
  UserRound,
  X
} from 'lucide-react';
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
                <Home className="nav__icon" /> {home}
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <UserRound className="nav__icon" /> {about}
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <FileText className="nav__icon" /> {skills}
              </a>
            </li>

            <li className="nav__item">
              <a href="#projecs" className="nav__link">
                <Image className="nav__icon" /> {projects}
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <SendHorizonal className="nav__icon" /> {contact}
              </a>
            </li>
          </ul>

          <i onClick={() => showMenu(!Toggle)}>
            <X className="nav__close" />
          </i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i>
            <LayoutGrid />
          </i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
