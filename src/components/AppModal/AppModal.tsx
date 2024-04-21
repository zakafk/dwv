import { FC, ReactNode } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ModalProps } from 'react-bootstrap';
import classNames from 'classnames';

import close_src from '../../assets/icons/close_icon.svg';
import { Picture } from '../Picture';

import './appModal.scss';

interface IAppModalProps {
  show: boolean;
  onHide: VoidFunction;
  children: ReactNode;
  className?: string;
  fullscreen?: ModalProps['fullscreen'];
  animation?: ModalProps['animation'];
}

export const AppModal: FC<IAppModalProps> = ({
  show,
  onHide,
  className,
  fullscreen,
  animation,
  children,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className={classNames('app-modal', className)}
      centered
      fullscreen={fullscreen}
      animation={animation}
    >
      <div className="close-icon" onClick={onHide}>
        <Picture src={close_src} />
      </div>
      {children}
    </Modal>
  );
};
