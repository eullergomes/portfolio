import { useTranslations } from 'next-intl';
import './footer.css';

const Footer = () => {
  const t = useTranslations('Home');
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Euller</h2>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              {t('about')}
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              {t('projects')}
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/eullergomes"
            className="footer__social-link"
            aria-label="Visite meu perfil no LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/eullergomes"
            className="footer__social-link"
            aria-label="Visite meu perfil no Github"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://instagram.com/eullertz"
            className="footer__social-link"
            aria-label="Visite meu perfil no Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; 2024{' '}
          <a href="https://github.com/eullergomes" className="footer__creator">
            Euller Gomes
          </a>
          .{t('copywriter')}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
