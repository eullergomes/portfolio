import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('Home');
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default Home;
