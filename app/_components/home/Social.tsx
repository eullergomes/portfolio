import { socialData } from './social-data';

const Social = () => {
  return (
    <div className="home__social">
      {socialData.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className={item.class_icon}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
