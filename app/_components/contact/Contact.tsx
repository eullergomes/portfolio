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
      <h2 className="section__title">{t('get-contact')}</h2>
      <span className="section__subtitle">{t('contact-me')}</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{t('talk_to_me')}</h3>

          <div className="contact__info">
            {/* Email */}
            <div className="contact__card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: 'var(--title-color)' }}
              >
                <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
                <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
              </svg>

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
                <svg
                  className="contact__button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{ fill: 'var(--text-color)' }}
                >
                  <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                </svg>
              </a>
            </div>

            {/* Whatsapp */}
            <div className="contact__card">
              <svg
                className="contact__button-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: 'var(--title-color)' }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                ></path>
              </svg>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">(98) 98533-4778</span>

              <a
                href="https://api.whatsapp.com/send?phone=98985334778&text=Olá, vim falar com você"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                {t('write-me')}{' '}
                <svg
                  className="contact__button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{ fill: 'var(--text-color)' }}
                >
                  <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                </svg>
              </a>
            </div>

            {/* Linkedin */}
            <div className="contact__card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                style={{ fill: 'var(--title-color)' }}
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
              </svg>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">@eullergomes</span>

              <a
                href="https://www.linkedin.com/in/eullergomes/"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                {t('write-me')}{' '}
                <svg
                  className="contact__button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{ fill: 'var(--text-color)' }}
                >
                  <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                </svg>
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
