import { FC } from 'react';

import { Rings } from '../../../../../../components/Rings';
import { useDevice } from '../../../../../../hooks/useDevice';
import { Dots } from '../../../../../../components/Dots';
import { Title, Subtitle } from '../../../../../../components/Typography';

import './servicesHeader.scss';

export const ServicesHeader: FC = () => {
  const { isMobile, isDesktop } = useDevice();

  return (
    <>
      <div className="services-header-titles">
        {isDesktop && <Dots className="dots" />}
        <Title align="center" color="black">Our services</Title>
        <div className="services-header-rings">
          <Rings scale={isMobile ? 0.5 : 1} />
        </div>
      </div>
      <Subtitle color="gray" align="center" className="services-header-subtitle">
        Digital World Visions - FZCO crafts transformative digital solutions for your future success
      </Subtitle>
    </>
  );
};
