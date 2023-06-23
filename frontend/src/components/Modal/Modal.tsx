import React, { useEffect, useState, FunctionComponent } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/features/cart';

import styles from './styles.module.css';
import classnames from 'classnames';

interface Props {
  onClose: () => void;
  movieId: string;
}

export const Modal: FunctionComponent<Props> = ({ onClose, movieId }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
    return () => {
      setOpen(false);
    };
  }, []);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const deleteFilm = () => {
    dispatch(cartActions.reset(movieId));
    onClose();
  };

  const renderModal = () => {
    return (
      <div id='modal-portal'>
        <div className={styles['modal__overlay']} onClick={handleOverlayClick}>
          <div className={styles['modal__content']} onClick={handleModalClick}>
            <div className={styles['modal__top']}>
              <div className={styles['modal__title']}>
                <h3 className={'font-semibold'}>Удаление билета</h3>
                <button className={styles['modal__close']} onClick={onClose}>
                  <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M12.8537 12.1463C12.9002 12.1927 12.937 12.2479 12.9622 12.3086C12.9873 12.3693 13.0003 12.4343 13.0003 12.5C13.0003 12.5657 12.9873 12.6308 12.9622 12.6915C12.937 12.7522 12.9002 12.8073 12.8537 12.8538C12.8073 12.9002 12.7521 12.9371 12.6914 12.9622C12.6307 12.9874 12.5657 13.0003 12.5 13.0003C12.4343 13.0003 12.3692 12.9874 12.3085 12.9622C12.2478 12.9371 12.1927 12.9002 12.1462 12.8538L7.99997 8.70691L3.85372 12.8538C3.7599 12.9476 3.63265 13.0003 3.49997 13.0003C3.36729 13.0003 3.24004 12.9476 3.14622 12.8538C3.0524 12.76 2.99969 12.6327 2.99969 12.5C2.99969 12.3674 3.0524 12.2401 3.14622 12.1463L7.2931 8.00003L3.14622 3.85378C3.0524 3.75996 2.99969 3.63272 2.99969 3.50003C2.99969 3.36735 3.0524 3.2401 3.14622 3.14628C3.24004 3.05246 3.36729 2.99976 3.49997 2.99976C3.63265 2.99976 3.7599 3.05246 3.85372 3.14628L7.99997 7.29316L12.1462 3.14628C12.24 3.05246 12.3673 2.99976 12.5 2.99976C12.6327 2.99976 12.7599 3.05246 12.8537 3.14628C12.9475 3.2401 13.0003 3.36735 13.0003 3.50003C13.0003 3.63272 12.9475 3.75996 12.8537 3.85378L8.70685 8.00003L12.8537 12.1463Z'
                      fill='currentColor'
                    />
                  </svg>
                </button>
              </div>
              <p className={styles['modal__descr']}>Вы уверены, что хотите удалить билет?</p>
            </div>
            <div className={styles['modal__bottom']}>
              <button
                className={classnames('font-medium', styles['modal__btn'], styles['modal__btn-primary'])}
                onClick={deleteFilm}
              >
                Да
              </button>
              <button
                className={classnames('font-medium', styles['modal__btn'], styles['modal__btn-outline'])}
                onClick={onClose}
              >
                Нет
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPortal = () => {
    return createPortal(renderModal(), document.body);
  };

  return <>{open && renderPortal()}</>;
};
