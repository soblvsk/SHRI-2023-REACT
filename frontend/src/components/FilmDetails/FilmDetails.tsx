import { FunctionComponent } from 'react';
import Image from 'next/image';

import { localizeGenre } from '../../lib/utils';
import { Movie } from '../../lib/interfaces';
import { FilmButtons } from '../FilmButtons/FilmButtons';

import styles from './styles.module.css';
import classnames from 'classnames';

interface Props {
  item: Movie | null;
}

export const FilmDetails: FunctionComponent<Props> = ({ item }) => {
  if (!item) return null;

  return (
    <div className={styles['film__details']}>
      <Image className={styles['film__image']} src={item.posterUrl} alt={item.title} width={400} height={500} />
      <div className={styles['film-information']}>
        <div className={styles['film-information__top']}>
          <div className={styles['film__block']}>
            <h2 className={classnames('font-semibold')}>{item.title}</h2>
            <FilmButtons movieId={item.id} />
          </div>
          <div className={styles['film__characters']}>
            <div className={styles['character__item']}>
              <span className='font-semibold'>Жанр: </span>
              {localizeGenre(item.genre)}
            </div>
            <div className={styles['character__item']}>
              <span className='font-semibold'>Год выпуска: </span>
              {item.releaseYear}
            </div>
            <div className={styles['character__item']}>
              <span className='font-semibold'>Рейтинг: </span>
              {item.rating}
            </div>
            <div className={styles['character__item']}>
              <span className='font-semibold'>Режиссер: </span>
              {item.director}
            </div>
          </div>
        </div>
        <div className={styles['film-information__bottom']}>
          <div className={classnames('font-semibold', 'film-information__subtitle')}>Описание</div>
          <p className={styles['film-information__descr']}>{item.description}</p>
        </div>
      </div>
    </div>
  );
};
