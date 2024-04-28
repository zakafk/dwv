import { FC } from 'react';

import { Rings } from '../../../../../../components/Rings';
import { useDevice } from '../../../../../../hooks/useDevice';
import { Dots } from '../../../../../../components/Dots';

import './servicesHeader.scss';

export const ServicesHeader: FC = () => {
  const { isMobile, isDesktop } = useDevice();

  return (
    <>
      <div className="services-header-titles">
        {isDesktop && <Dots className="dots" />}
        <h2 className="services-header-title">Our services</h2>
        <div className="services-header-rings">
          <Rings scale={isMobile ? 0.5 : 1} />
        </div>
      </div>
      <div className="services-header-text">
        <p className="services-header-subtitle">
          Digital World Visions - FZCO crafts transformative digital solutions for your future success
        </p>
      </div>
    </>
  );
};
