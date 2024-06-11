'use client';

import './contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h1 className="section__title">Entrar em contato</h1>
      <span className="section__subtitle">Contate-me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Fale comigo</h3>

          <div className="contact__info">
            {/* Email */}
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                eullertexeira@gmail.com
              </span>

              <a href="eullertexeira@gmail.com" className="contact__button">
                Falar comigo{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* Whatsapp */}
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">(98) 98533-4778</span>

              <a
                href="https://api.whatsapp.com/send?phone=98985334778&text=Olá, vim falar com você"
                className="contact__button"
              >
                Falar comigo{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* Linkedin */}
            <div className="contact__card">
              <i className="bx bxl-linkedin-square contact__card-icon"></i>

              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">@eullergomes</span>

              <a
                href="https://www.linkedin.com/in/eullergomes/"
                className="contact__button"
              >
                Falar comigo{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Me descreva sua demanda</h3>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
