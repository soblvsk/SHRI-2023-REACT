import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';
import { MOVIE_GENRE } from '../../constants/movie';
import classNames from 'classnames';
import Image from 'next/image';
import { MovieCounterContainer } from '@/components/MovieCounter/container';
import Link from 'next/link';
import { Film } from '@/constants/interfaces';

export const MovieCard: FunctionComponent<{ movie: Film; isCart?: boolean }> = ({ movie, isCart }) => {
  if (!movie) return null;

  return (
    <div className={classNames(styles.film)}>
      <Image
        className={styles.film__img}
        src={movie.posterUrl || ''}
        width='100'
        height='120'
        alt='poster'
        priority={true}
      />
      <div className={styles.film__info}>
        <Link href={`/film/${movie.id}`} className={styles.film__title}>
          {movie.title}
        </Link>
        <span className={styles.film__genre}>{MOVIE_GENRE[movie.genre]}</span>
      </div>
      <MovieCounterContainer movieId={movie.id} isCart={isCart} />
    </div>
  );
};
