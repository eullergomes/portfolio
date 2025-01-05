import { useTranslations } from 'next-intl';

import Work1 from '../../assets/img/fsw-food.webp';
import Work2 from '../../assets/img/fsw-barber.webp';
import Work3 from '../../assets/img/find-book.webp';
import Work4 from '../../assets/img/expensive-tracker.webp';
import Work5 from '../../assets/img/dev-burguer.webp';
import Work6 from '../../assets/img/pokedex.webp';

export const useProjectsData = () => {
  const t = useTranslations('Home');
  return [
    {
      id: 1,
      image: Work1,
      title: 'FSW Food',
      description: `${t('proj_food')}`,
      link: 'https://fswfood-euller-gomes-projects.vercel.app'
    },
    {
      id: 2,
      image: Work2,
      title: 'Barbershop',
      description: `${t('proj_barbershop')}`,
      link: 'https://barber-store-gamma.vercel.app'
    },
    {
      id: 3,
      image: Work3,
      title: 'Find Book',
      description: `${t('proj_find_book')}`,
      link: 'https://github.com/eullergomes?tab=repositories'
    },
    {
      id: 4,
      image: Work4,
      title: 'Expensive Tracker',
      description: `${t('proj_expensive_tracker')}`,
      link: 'https://expense-tracker-iota-vert.vercel.app'
    },
    {
      id: 5,
      image: Work5,
      title: 'Dev Burguer',
      description: `${t('proj_burger')}`,
      link: 'https://eullergomes.github.io/cardapio_digital'
    },
    {
      id: 6,
      image: Work6,
      title: 'Pokedéx',
      description: `${t('proj_pokedex')}`,
      link: 'https://github.com/eullergomes/pokedex'
    }
  ];
};
