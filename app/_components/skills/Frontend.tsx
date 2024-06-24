import Image from 'next/image';
import TypescriptIcon from '../../assets/img/typescript-icon.svg';
import NextIcon from '../../assets/img/next-js.svg';
import JavascriptIcon from '../../assets/img/javascript-js.svg';
import TailwindIcon from '../../assets/img/tailwind-css.svg';
import ReactIcon from '../../assets/img/react.svg';
import SassIcon from '../../assets/img/file-type-sass.svg';

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        <i className="uil uil-monitor"></i>
        Front-end
      </h3>

      <div className="skills__images">
        <div className="skills__image">
          <Image src={NextIcon} alt="Next.js" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src={TypescriptIcon} alt="Typescript" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src={JavascriptIcon} alt="Javascript" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src={ReactIcon} alt="ReactJS" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src={TailwindIcon} alt="Tailwind CSS" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src={SassIcon} alt="SAAS" width={45} height={45} />
        </div>
      </div>
    </div>
  );
};

export default Frontend;
