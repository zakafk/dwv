import { FC } from 'react';

import { Section } from '../../../../components/Section';
import { Rings } from '../../../../components/Rings';
import { Button } from '../../../../components/Button';
import { useDevice } from '../../../../hooks/useDevice';
import { Dots } from '../../../../components/Dots';

import './aboutUsSection.scss';

export const AboutUsSection: FC = () => {
  const { isDesktop, isMobile } = useDevice();

  return (
    <Section className="home-section home-section-about-us about-us">
      {isDesktop && (
        <div className="header">
          <Rings type="gold"/>
        </div>
      )}
      <div className="content">
        <div className="position-relative">
          <div className="main-image-container">
            <div className="main-img" />
          </div>
          <Dots color="gold" className="dots" />
        </div>
        <div className="position-relative">
          <h3 className="content-title">About Us</h3>
          <p className="content-description">
            At  Digital World Visions - FZCO, we're not just about providing services; we're about offering
            a partnership that grows with your business. Let us help you navigate the complexities of the digital world,
            ensuring your technologies are not just current, but future-ready.
          </p>
          <Button text="Learn more" />
          <Rings type="gold" className="content-rings" rotate={isDesktop ? -45 : 0} scale={!isMobile ? 1 : 0.5} />
        </div>
      </div>
    </Section>
  )
};
