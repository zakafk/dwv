import { FC } from 'react';

import { Section } from '../../../../components/Section';
import { Rings } from '../../../../components/Rings';
import { Dots } from '../../../../components/Dots';
import { Title, Subtitle } from '../../../../components/Typography';

import './aboutUsManiSection.scss';

export const AboutUsManiSection: FC = () => {
  return (
    <Section className="about-us-section about-us-section-main">
      <Dots color="violet" className="dots" />
      <Title align="center" color="violet-deep">About Us</Title>
      <Subtitle align="center" color="violet-deep" className="description">
        At Digital World Visions, we're more than just a technology company; we're a team of passionate innovators
        dedicated to propelling your business forward through sustainable digital solutions. We understand
        the ever-evolving digital landscape and the crucial role technology plays in success. However, we also believe
        in progress that doesn't come at the expense of our planet.
      </Subtitle>
      <Rings className="rings" type="blue" rotate={-110} />
    </Section>
  );
};
