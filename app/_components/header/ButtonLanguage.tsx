'use client';

import { useState } from 'react';
import './buttonLanguage.css';
import { Link, usePathname } from '@/navigation';

const ButtonLanguage = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleClick}>
        <i id="planet" className="uil uil-globe"></i>
      </button>
      {isOpen && (
        <div className="dropdown-content show">
          <Link className="opt" href={pathname} locale="pt">
            pt-BR
          </Link>
          <Link className="opt" href={pathname} locale="en">
            en-US
          </Link>
        </div>
      )}
    </div>
  );
};

export default ButtonLanguage;
