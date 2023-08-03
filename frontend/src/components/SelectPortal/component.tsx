import { FunctionComponent, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

export const SelectPortal: FunctionComponent<{
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
}> = ({ children, visible, onClose }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('scroll', onClose, true);
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('scroll', onClose, true);
      }
    };
  }, [onClose]);

  const container = typeof document !== 'undefined' ? document.querySelector('#select-portal') : null;

  return visible && container ? createPortal(children, container) : null;
};
