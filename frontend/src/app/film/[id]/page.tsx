'use client';
import { notFound } from 'next/navigation';
import { FilmDetails } from '../../../components/FilmDetails/FilmDetails';
import { Reviews } from '../../../components/Reviews/Reviews';
import { Loading } from '../../../components/Loading/Loading';
import { useGetMovieQuery } from '../../../redux/services/movieApi';
import { useGetReviewQuery } from '../../../redux/services/reviewApi';

import styles from './styles.module.css';

export default function Film({ params }: { params: { id: string } }) {
  const filmId = params.id;

  const { data: movieData, isLoading: movieIsLoading, error: movieError } = useGetMovieQuery(filmId);
  const { data: reviewData, isLoading: reviewIsLoading, error: reviewError } = useGetReviewQuery(filmId);

  if (movieIsLoading || reviewIsLoading) {
    return <Loading />;
  }

  if (!movieData || movieError || !reviewData || reviewError) return notFound();

  return (
    <div className={styles.film}>
      <FilmDetails item={movieData} />
      <div className={styles['film__reviews']}>
        {reviewData.map(({ id, name, text, rating }) => (
          <Reviews key={id} name={name} text={text} rating={rating} />
        ))}
      </div>
    </div>
  );
}
