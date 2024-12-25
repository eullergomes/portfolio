import { useTranslations } from 'next-intl';

import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  const t = useTranslations('Home');

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">{t('skills-description')}</span>

      <div className="skills__container container grid">
        <Frontend />

        <Backend />
      </div>
    </section>
  );
};

export default Skills;
