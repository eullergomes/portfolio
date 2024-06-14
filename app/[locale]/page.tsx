import { useTranslations } from 'next-intl';
import Header from '../_components/header/Header';
import Home from '../_components/home/Home';
import About from '../_components/about/About';
import Skills from '../_components/skills/Skills';
import Contact from '../_components/contact/Contact';
import Footer from '../_components/footer/Footer';
import ScrollUp from '../_components/scrollup/ScrollUp';

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
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default HomePage;
