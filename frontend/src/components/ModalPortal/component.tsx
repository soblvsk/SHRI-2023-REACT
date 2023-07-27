import { FunctionComponent, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

export const ModalPortal: FunctionComponent<{
  children: ReactNode;
  visible: boolean;
}> = ({ children, visible }) => {
  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  const container = document.querySelector('#modal-portal');

  return visible && container
    ? createPortal(
        <div className={styles.overlay}>
          <div className={styles.modal}>{children}</div>
        </div>,
        container,
      )
    : null;
};
