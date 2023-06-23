'use client';
import Link from 'next/link';

import styles from './styles.module.css';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { selectTotalAmount } from '../../redux/features/cart/selector';
import { RootState } from '../../redux/store';

export default function Header() {
  const cartCount = useSelector((state: RootState) => selectTotalAmount(state));
  return (
    <header className={styles.header}>
      <div className={classnames('container', 'header__container')}>
        <div className={styles['header__body']}>
          <div className={classnames('font-bold', styles['header__logo'])}>
            <Link href='/'>Билетопоиск</Link>
          </div>
          <div>
            <Link href='/cart' className={styles['cart']}>
              <span className={classnames('font-semibold', styles['cart__count'])}>{cartCount}</span>
              <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M29.4936 8.675C29.304 8.46212 29.0713 8.29189 28.811 8.17554C28.5507 8.05918 28.2687 7.99935 27.9836 8H21.9936C21.9936 6.4087 21.3615 4.88258 20.2363 3.75736C19.111 2.63214 17.5849 2 15.9936 2C14.4023 2 12.8762 2.63214 11.751 3.75736C10.6258 4.88258 9.99362 6.4087 9.99362 8H4.00362C3.7202 8.00076 3.44012 8.06127 3.18166 8.17758C2.9232 8.29389 2.69216 8.46338 2.50362 8.675C2.31666 8.88583 2.17636 9.1338 2.09191 9.40264C2.00747 9.67148 1.98079 9.95513 2.01362 10.235L3.79612 25.235C3.85394 25.7237 4.08991 26.174 4.45891 26.4996C4.8279 26.8253 5.304 27.0034 5.79612 27H26.2024C26.6945 27.0034 27.1706 26.8253 27.5396 26.4996C27.9086 26.174 28.1446 25.7237 28.2024 25.235L29.9849 10.235C30.0175 9.95504 29.9907 9.67134 29.906 9.40249C29.8213 9.13364 29.6808 8.88573 29.4936 8.675ZM15.9936 4C17.0545 4 18.0719 4.42143 18.822 5.17157C19.5722 5.92172 19.9936 6.93913 19.9936 8H11.9936C11.9936 6.93913 12.415 5.92172 13.1652 5.17157C13.9153 4.42143 14.9328 4 15.9936 4ZM26.2136 25C26.21 25.0013 26.206 25.0013 26.2024 25H5.77487L4.00362 10H9.99362V13C9.99362 13.2652 10.099 13.5196 10.2865 13.7071C10.4741 13.8946 10.7284 14 10.9936 14C11.2588 14 11.5132 13.8946 11.7007 13.7071C11.8883 13.5196 11.9936 13.2652 11.9936 13V10H19.9936V13C19.9936 13.2652 20.099 13.5196 20.2865 13.7071C20.4741 13.8946 20.7284 14 20.9936 14C21.2588 14 21.5132 13.8946 21.7007 13.7071C21.8883 13.5196 21.9936 13.2652 21.9936 13V10H27.9936L26.2136 25Z'
                  fill='currentColor'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
