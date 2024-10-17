import { Modal } from '@/shared/ui/modal';
import { Fragment, useState } from 'react';
import * as s from './styles.css';

export const MediaCard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Fragment>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <div>hi</div>
      </Modal>
      <div
        className={s.container}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        media card
      </div>
    </Fragment>
  );
};
