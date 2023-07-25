import React from 'react';
import { MoviesPage } from '@/pagesComponents/Movies/component';

interface Props {
  searchParams: {
    cinemaId: string;
  };
}

export default function Home({ searchParams }: Props) {
  return <MoviesPage cinemaId={searchParams.cinemaId} />;
}
