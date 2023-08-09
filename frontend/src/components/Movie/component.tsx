import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import { MOVIE_GENRE } from '@/constants/movie';
import { Film } from '@/constants/interfaces';
import { MovieCounterContainer } from '../MovieCounter/container';

import styles from './styles.module.scss';

export const Movie: FunctionComponent<{ movie: Film }> = ({ movie }) => {
  if (!movie) {
    return null;
  }

  const { id, posterUrl, title, releaseYear, description, genre, rating, director } = movie;

  return (
    <div className={styles.root}>
      <div className={styles.film}>
        <Image
          src={posterUrl}
          className={styles.film__poster}
          width={400}
          height={500}
          alt={title}
          priority={true}
        />
        <div className={styles.film__info}>
          <div className={styles.film__top}>
            <div className={styles.film__block}>
              <h2 className={styles.film__title}>{title}</h2>
              <MovieCounterContainer movieId={id} />
            </div>
            <div className={styles.characters}>
              <div className={styles.characters__item}>
                <span className={styles.characters__title}>Жанр: </span>
                {MOVIE_GENRE[genre]}
              </div>
              <div className={styles.characters__item}>
                <span className={styles.characters__title}>Год выпуска: </span>
                {releaseYear}
              </div>
              <div className={styles.characters__item}>
                <span className={styles.characters__title}>Рейтинг: </span>
                {rating}
              </div>
              <div className={styles.characters__item}>
                <span className={styles.characters__title}>Режиссер: </span>
                {director}
              </div>
            </div>
          </div>
          <div className={styles.film__bottom}>
            <div className={styles.film__subtitle}>Описание</div>
            <p className={styles.film__descr}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
