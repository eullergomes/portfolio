import { useTranslations } from 'next-intl';
import Header from '../_components/header/Header';

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

      {/* <main className="main">
        <Home /> 
        <h1>Hello world</h1>
        <i className="uil uil-instagram"></i>
      </main> */}
    </>
  );
};

export default Home;
