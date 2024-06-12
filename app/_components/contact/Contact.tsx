import { useTranslations } from 'next-intl';
import './contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
  const t = useTranslations('Home');

  const multLanguages = {
    required_name: t('required_name'),
    short_name: t('short_name'),
    long_name: t('long_name'),
    required_email: t('required_email'),
    invalid_email: t('invalid_email'),
    short_email: t('short_email'),
    long_email: t('long_email'),
    required_message: t('required_message'),
    short_message: t('short_message'),
    long_message: t('long_message'),
    success_message: t('success_message'),
    input_name: t('input_name'),
    placeholder_name: t('placeholder_name'),
    placeholder_email: t('placeholder_email'),
    description_message: t('description_message'),
    submit_button: t('submit_button'),
    loader_button: t('loader_button'),
    environment_variable_error: t('environment_variable_error'),
    error_email: t('error_email'),
    error_emailjs: t('error_emailjs')
  };

  return (
    <section className="contact section" id="contact">
      <h1 className="section__title">{t('get-contact')}</h1>
      <span className="section__subtitle">{t('contact-me')}</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{t('talk_to_me')}</h3>

          <div className="contact__info">
            {/* Email */}
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">E-mail</h3>
              <span className="contact__card-data">
                eullertexeira@gmail.com
              </span>

              <a
                href="eullertexeira@gmail.com"
                className="contact__button"
                target="_black"
              >
                {t('write-me')}{' '}
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
                target="_blank"
                rel="noreferrer"
              >
                {t('write-me')}{' '}
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
                target="_blank"
                rel="noreferrer"
              >
                {t('write-me')}{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">{t('demand')}</h3>

          <ContactForm {...multLanguages} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
