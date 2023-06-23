'use client';
import React from 'react';

import { Films } from '../components/Films/Films';
import { Filters } from '../components/Filters/Filters';
import { Loading } from '../components/Loading/Loading';
import { useGetMoviesQuery } from '../redux/services/movieApi';
import { useGetCinemasQuery } from '../redux/services/cinemaApi';
import { notFound } from 'next/navigation';

export default function Home() {
  const { data: moviesData, isLoading: moviesIsLoading, error: moviesError } = useGetMoviesQuery();
  const { data: cinemasData, isLoading: cinemasIsLoading, error: cinemasError } = useGetCinemasQuery();

  if (moviesIsLoading || cinemasIsLoading) {
    return <Loading />;
  }

  if (!moviesData || moviesError || !cinemasData || cinemasError) {
    return notFound();
  }

  return (
    <div className='page'>
      <Filters movies={moviesData} cinemas={cinemasData} />
      <Films />
    </div>
  );
}
