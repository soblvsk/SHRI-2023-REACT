export interface Cinema {
  id: string;
  name: string;
  movieIds: string[];
}

export interface Movie {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface Card {
  id: string;
  title: string;
  posterUrl: string;
  genre: string;
}

export interface Options {
  id: string;
  name: string;
}
