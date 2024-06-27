'use client';

import { useState } from 'react';
import './buttonLanguage.css';
import { Link, usePathname } from '@/navigation';
import Image from 'next/image';

const ButtonLanguage = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown" id="dropdown">
      <button
        className="dropdown-btn"
        aria-label="Abrir menu dropdown"
        onClick={handleClick}
      >
        <i id="planet" className="uil uil-globe"></i>
      </button>
      {isOpen && (
        <div className="dropdown-content show">
          <Link className="drop-option" href={pathname} locale="pt">
            <div className="link-content">
              <Image
                src="/images/icons-brasil.webp"
                alt="Brazil Flag"
                width={20}
                height={20}
                quality={100}
              />
              <span>pt-BR</span>
            </div>
          </Link>
          <Link className="drop-option" href={pathname} locale="en">
            <div className="link-content">
              <Image
                src="/images/icons-eua.webp"
                alt="USA Flag"
                width={20}
                height={20}
                quality={100}
              />
              <span>en-US</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ButtonLanguage;
