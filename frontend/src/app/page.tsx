import React from 'react';
import { MoviesPage } from '@/pagesComponents/Movies/component';

export const revalidate = 60;

export default function Home({ searchParams }: { searchParams: { [key: string]: string } }) {
  return <MoviesPage cinemaId={searchParams.cinemaId} />;
}
