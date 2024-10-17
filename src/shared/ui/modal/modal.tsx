import React from 'react';
import { Portal } from 'shared/ui/portal';
import * as s from './styles.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className={s.overlay}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <div className={s.modal} onClick={(e) => e.stopPropagation()}>
          <button className={s.closeButton} onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
