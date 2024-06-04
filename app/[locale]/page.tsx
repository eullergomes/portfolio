import { useTranslations } from 'next-intl';
import Header from '../_components/header/Header';
import Home from '../_components/home/Home';

const HomePage = () => {
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

      <main className="main">
        <Home />
      </main>
    </>
  );
};

export default HomePage;
