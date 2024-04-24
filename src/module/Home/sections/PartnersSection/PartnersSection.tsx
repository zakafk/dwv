import { FC } from 'react';

import { Section } from '../../../../components/Section';
import { Picture } from '../../../../components/Picture';
import { Button } from '../../../../components/Button';
import { useDevice } from '../../../../hooks/useDevice';
import dots_blue_src from '../../../../assets/dots_blue.svg';

import fun_fact_src from './assets/fun_fact.png';

import './partnersSection.scss';

export const PartnersSection: FC = () => {
  const { isDesktop } = useDevice();

  return (
    <Section className="home-section home-section-partners">
      <div className="home-section-partners-row">
        <div className="home-section-partners-container">
          <div className="tag">Why Choose us</div>
          <h3 className="title">Choose Us to Grow Your Business</h3>
          <p className="description">
            Our partners achieve their future goals with our support.
            Scale your business to new heights with our expertise.
          </p>
          <Button text="Contact us" type="secondary"/>
        </div>
        <div className="img-container">
          <div className="main"/>
          <Picture src={fun_fact_src} className="secondary"/>
        </div>
      </div>
      {isDesktop && <Picture src={dots_blue_src} className="dots"/>}
    </Section>
  );
};
