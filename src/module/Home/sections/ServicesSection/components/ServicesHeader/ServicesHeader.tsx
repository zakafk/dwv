import { FC } from 'react';

import { Rings } from '../../../../../../components/Rings';

import './servicesHeader.scss';

export const ServicesHeader: FC = () => {
  return (
    <>
      <div className="services-header-img">
        <h2 className="services-header-title">Our services</h2>
        <div className="services-header-rings">
          <Rings />
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
