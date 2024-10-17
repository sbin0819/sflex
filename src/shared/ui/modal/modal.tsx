import React, { useEffect } from 'react';
import { Portal } from 'shared/ui/portal';
import * as s from './styles.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // 모달이 열렸을 때 html 태그의 overflow를 hidden으로 설정
      document.documentElement.style.overflow = 'hidden';
    } else {
      // 모달이 닫혔을 때 원래 상태로 복원
      document.documentElement.style.overflow = '';
    }

    // 컴포넌트 언마운트 시 overflow 초기화
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

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
