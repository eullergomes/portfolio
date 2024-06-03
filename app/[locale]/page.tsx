import { useTranslations } from 'next-intl';
import Header from '../_components/Header';

const Home = () => {
  const t = useTranslations('Home');
  return (
    <>
      <Header
        home={t('home')}
        about={t('about')}
        skills={t('skills')}
        projects={t('projects')}
        contact={t('contact')}
      />
    </>
  );
};

export default Home;
