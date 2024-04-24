import { FC } from 'react';

import { Picture } from '../../../../../../../components/Picture';
import { AppModal } from '../../../../../../../components/AppModal';
import { useDevice } from '../../../../../../../hooks/useDevice';
import dots_gold from '../../../../../../../assets/dots_gold.svg';
import circle from '../../../assets/сircle.svg';

interface IModalProps {
  isVisible: boolean;
  handleHide: VoidFunction;
  title: string;
  description: string;
}

export const Modal: FC<IModalProps> = ({ isVisible, handleHide, title, description }) => {
  const { isMobile } = useDevice();

  return (
  <AppModal show={isVisible} onHide={handleHide} className="services-card-modal">
    {!isMobile && <Picture src={dots_gold} className="dots"/>}
    <div className="services-card-logo">
      <Picture src={circle}/>
    </div>
    <div className="titles">
      <h3 className="titles-title">{title}</h3>
      <p className="titles-description">{description}</p>
    </div>
  </AppModal>
)};
