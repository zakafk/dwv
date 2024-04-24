import { FC } from 'react';

import { Section } from '../../../../components/Section';
import { Rings } from '../../../../components/Rings';
import { AppCarousel } from '../../../../components/AppCarousel';
import { Button } from '../../../../components/Button';

import './projectsSection.scss';
import {useDevice} from "../../../../hooks/useDevice";

export const ProjectsSection: FC = () => {
  const { isMobile } = useDevice();

  return (
    <Section className="home-section home-section-projects">
      <header className="header">
        <Rings type="gold" className="header-rings" rotate={isMobile ? 180 : 0} scale={isMobile ? 0.5 : 1} />
        <div className="header-titles">
          <h3 className="header-title">Our Innovative Projects</h3>
          <p className="header-subtitle">constantly pushing the boundaries and driving positive change</p>
        </div>
      </header>
      <AppCarousel />
      <div className="footer">
        <Button text="Learn more" />
        {!isMobile && <Rings type="gold" className="footer-rings" rotate={-90}/>}
      </div>
    </Section>
  );
};
