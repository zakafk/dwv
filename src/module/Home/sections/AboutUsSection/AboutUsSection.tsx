import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../../../../components/Section';
import { Rings } from '../../../../components/Rings';
import { Button } from '../../../../components/Button';
import { useDevice } from '../../../../hooks/useDevice';
import { Dots } from '../../../../components/Dots';
import { PATH_NAMES } from '../../../../constants/navigation';
import { Title, Subtitle } from '../../../../components/Typography';

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
          <Title color="gold">About Us</Title>
          <Subtitle color="gold" className="content-description">
            At  Digital World Visions - FZCO, we're not just about providing services; we're about offering
            a partnership that grows with your business. Let us help you navigate the complexities of the digital world,
            ensuring your technologies are not just current, but future-ready.
          </Subtitle>
          <Link to={PATH_NAMES.ABOUT_US}>
            <Button text="Learn more" />
          </Link>
          <Rings type="gold" className="content-rings" rotate={isDesktop ? -45 : 0} scale={!isMobile ? 1 : 0.5} />
        </div>
      </div>
    </Section>
  )
};
