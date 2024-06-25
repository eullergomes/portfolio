import { useTranslations } from 'next-intl';
import './work.css';
import Works from './Works';

const Work = () => {
  const t = useTranslations('Home');

  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">{t('projects')}</h2>
      <span className="section__subtitle">{t('latest-projects')}</span>

      <Works />
    </section>
  );
};

export default Work;
