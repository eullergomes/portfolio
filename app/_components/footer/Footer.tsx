import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Euller</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projetos
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/eullergomes/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/eullergomes"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://instagram.com/eullertz"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; 2024 Euller Gomes. Todos os direitos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
