import Link from 'next/link';

import styles from './styles.module.css';
import classnames from 'classnames';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={classnames('container', 'footer__container')}>
        <div className={styles['footer__body']}>
          <Link href='/faq' className={styles['footer__link']}>
            Вопросы-ответы
          </Link>
          <Link href='/about' className={styles['footer__link']}>
            О нас
          </Link>
        </div>
      </div>
    </footer>
  );
}
