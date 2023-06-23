'use client';

import { useSelector } from 'react-redux';
import { selectTotalAmount } from '../../redux/features/cart/selector';
import { RootState } from '../../redux/store';
import { selectMovies } from '../../redux/features/movies/selector';
import { NotFound } from '../../components/NotFound/NotFound';
import { FilmCard } from '../../components/FilmCard/FilmCard';
import { localizeGenre } from '../../lib/utils';

import styles from './styles.module.css';
import classnames from 'classnames';

export default function Cart() {
  const cartState = useSelector((state: RootState) => state.cart);
  const cartCount = useSelector((state: RootState) => selectTotalAmount(state));
  const films = useSelector((state: RootState) => selectMovies(state));

  const filmsInCart = Object.keys(cartState)
    .map((id) => films.find((film) => film.id === id))
    .filter((movie) => movie !== undefined);
  console.log(filmsInCart);

  return (
    <div className={styles.cart}>
      <div className={styles['cart__items']}>
        {filmsInCart.length > 0 ? (
          filmsInCart.map(
            (movie) =>
              movie && (
                <FilmCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  posterUrl={movie.posterUrl}
                  genre={localizeGenre(movie.genre)}
                  isCart={true}
                />
              ),
          )
        ) : (
          <NotFound />
        )}
      </div>
      <div className={classnames('font-semibold', styles['cart__result'])}>
        <span>Итого билетов:</span>
        <span>{cartCount}</span>
      </div>
    </div>
  );
}
