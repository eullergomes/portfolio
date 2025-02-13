import { useTranslations } from 'next-intl';
import Header from '../_components/header/Header';
import Home from '../_components/home/Home';
import About from '../_components/about/About';
import Skills from '../_components/skills/Skills';
import Contact from '../_components/contact/Contact';
import Footer from '../_components/footer/Footer';
import ScrollUp from '../_components/scrollup/ScrollUp';
import Work from '../_components/work/Work';

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
      <Home />
      <About
        about={t('about')}
        introduction={t('introduction')}
        about_description={t('about-description')}
        download_cv={t('download-cv')}
      />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default HomePage;