import { FunctionComponent, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

export const ModalPortal: FunctionComponent<{
  children: ReactNode;
  visible: boolean;
}> = ({ children, visible }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = visible ? 'hidden' : 'unset';
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset';
      }
    };
  }, [visible]);

  const container = typeof document !== 'undefined' ? document.querySelector('#modal-portal') : null;

  return visible && container
    ? createPortal(
        <div className={styles.overlay}>
          <div className={styles.modal}>{children}</div>
        </div>,
        container,
      )
    : null;
};
