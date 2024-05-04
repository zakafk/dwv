import { FC, useCallback, useState } from 'react';

import { Picture } from '../../../../../../../components/Picture';
import { Modal } from './Modal';

import './card.scss';

interface ICardProps {
  title: string;
  icon: string;
  modalProps: Record<string, string>;
}

export const Card: FC<ICardProps> = ({ title,  icon, modalProps}) => {
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
            <Picture src={icon}/>
          </div>
          <p className="services-card-title">{title}</p>
        </div>
      </div>
      <Modal
        isVisible={isVisible}
        handleHide={handleHide}
        title={modalProps.title}
        description={modalProps.description}
        icon={icon}
      />
    </>
  );
};
