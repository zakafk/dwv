import { FC } from 'react';

import { Section } from '../../../../components/Section';
import { Rings } from '../../../../components/Rings';
import { Picture } from '../../../../components/Picture';
import { Button } from '../../../../components/Button';
import dots_gold from '../../../../assets/dots_gold.svg';
import us_src from './assets/us.jpeg';

import './aboutUsSection.scss';

export const AboutUsSection: FC = () => (
  <Section className="home-section home-section-about-us about-us">
    <div className="header">
      <Rings type="gold" />
    </div>
    <div className="content">
      <div>
        <div className="main-image-container">
          <div className="main-img" />
        </div>
        <div className="dots-img">
          <Picture src={dots_gold} />
        </div>
      </div>
      <div className="position-relative">
        <h3 className="content-title">About Us</h3>
        <p className="content-description">
          At  Digital World Visions - FZCO, we're not just about providing services; we're about offering
          a partnership that grows with your business. Let us help you navigate the complexities of the digital world,
          ensuring your technologies are not just current, but future-ready.
        </p>
        <Button text="Learn more" />
        <Rings type="gold" className="content-rings" rotate={-45} />
      </div>
    </div>
  </Section>
);
