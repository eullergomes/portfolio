import Image from 'next/image';

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        <i className="uil uil-monitor"></i>
        Front-end developer
      </h3>

      <div className="skills__images">
        <div className="skills__image">
          <Image src="/js-icon.png" alt="Javascript" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src="/ts-icon.png" alt="Typescript" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src="/react-icon.png" alt="ReactJS" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src="/angular-icon.png" alt="Angular" width={45} height={45} />
        </div>
        <div className="skills__image">
          <img src="/tailwind-icon.png" alt="TailwindCSS" />
        </div>
        <div className="skills__image">
          <Image src="/sass-icon.png" alt="SAAS" width={45} height={45} />
        </div>
      </div>
    </div>
  );
};

export default Frontend;
