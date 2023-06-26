import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FilmButtons } from '../FilmButtons/FilmButtons';

import styles from './styles.module.css';
import classnames from 'classnames';

interface Props {
  id: string;
  title: string;
  posterUrl: string;
  genre: string;
  isCart?: boolean;
}

export const FilmCard: FunctionComponent<Props> = ({ id, title, posterUrl, genre, isCart }) => {
  return (
    <div className={styles['film-card']}>
      <Link href={`/film/${id}`} className={styles['film-card__link']}>
        <Image
          className={styles['film-card__image']}
          src={posterUrl}
          alt={title}
          width={100}
          height={120}
          priority={true}
        />
        <div className={styles['film-card__block']}>
          <h3 className={classnames('font-semibold', styles['film-card__title'])}>{title}</h3>
          <p className={styles['film-card__genre']}>{genre}</p>
        </div>
      </Link>
      <FilmButtons movieId={id} isCart={isCart} />
    </div>
  );
};
