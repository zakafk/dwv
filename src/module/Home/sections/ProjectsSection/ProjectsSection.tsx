import { FC } from 'react';

import { Section } from '../../../../components/Section';
import { Rings } from '../../../../components/Rings';
import { AppCarousel } from '../../../../components/AppCarousel';
import { Button } from '../../../../components/Button';
import { useDevice } from '../../../../hooks/useDevice';
import { Title, Subtitle } from '../../../../components/Typography';

import './projectsSection.scss';

export const ProjectsSection: FC = () => {
  const { isMobile } = useDevice();

  return (
    <Section className="home-section home-section-projects">
      <header className="header">
        <Rings type="gold" className="header-rings" rotate={isMobile ? 180 : 0} scale={isMobile ? 0.5 : 1} />
        <div className="header-titles">
          <Title color="gold-deep" align="center">Our Innovative Projects</Title>
          <Subtitle color="gold" align="center">
            constantly pushing the boundaries and driving positive change
          </Subtitle>
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
