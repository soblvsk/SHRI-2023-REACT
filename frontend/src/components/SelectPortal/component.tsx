import { FunctionComponent, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

export const SelectPortal: FunctionComponent<{
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
}> = ({ children, visible, onClose }) => {
  useEffect(() => {
    document.addEventListener('scroll', onClose, true);

    return () => document.removeEventListener('scroll', onClose, true);
  }, [onClose]);

  const container = document.querySelector('#select-portal');

  return visible && container ? createPortal(children, container) : null;
};
