import { FC, useCallback, useState } from 'react';

import { Picture } from '../../../../../../../components/Picture';
import circle from '../../../assets/сircle.svg';
import { Modal } from './Modal';

import './card.scss';

interface ICardProps {
  title: string;
  modalProps: Record<string, string>;
}

export const Card: FC<ICardProps> = ({ title, modalProps}) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setVisible(true);
  }, []);

  const handleHide = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <div className="services-card" onClick={handleClick}>
        <div className="services-card-container">
          <div className="services-card-logo">
            <Picture src={circle}/>
          </div>
          <p className="services-card-title">{title}</p>
        </div>
      </div>
      <Modal
        isVisible={isVisible}
        handleHide={handleHide}
        title={modalProps.title}
        description={modalProps.description}
      />
    </>
  );
};
