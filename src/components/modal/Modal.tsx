import { type JSX, SyntheticEvent, useEffect, useMemo, useRef } from 'react';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import styles from './modal.module.scss';

interface ModalProps {
    isOpen: boolean,
    children: JSX.Element | JSX.Element[],
    title: string
    closeFn: ()=> void
}

export function Modal({ isOpen, children, title, closeFn }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const classNames = useMemo(() => `${styles.Modal} ${isOpen ? '' : styles.ModalClosing}`, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    }
  }, [isOpen]);

  function onAnimationEnd() {
    if (!isOpen) {
      modalRef.current?.close();
    }
  }

  function onClick(ev: SyntheticEvent) {
    if (ev.target === modalRef.current) {
      closeFn();
    }
  }

  function onCancel(ev: SyntheticEvent) {
    ev.preventDefault();
    closeFn();
  }

  return (
    <dialog
      ref={modalRef}
      className={classNames}
      onClose={closeFn}
      onCancel={onCancel}
      onClick={onClick}
      onAnimationEnd={onAnimationEnd}
    >
      <div>
        <header className={styles.ModalHeader}>{title}</header>
        <div className={styles.ModalClose} onClick={closeFn}><CloseIcon/></div>
        {children}
      </div>
    </dialog>
  );
}
