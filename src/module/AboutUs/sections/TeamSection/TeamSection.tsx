import { FC } from 'react';

import { Section } from '../../../../components/Section';
import { Rings } from '../../../../components/Rings';
import { Dots } from '../../../../components/Dots';
import { useDevice } from '../../../../hooks/useDevice';
import { Subtitle, Title } from '../../../../components/Typography';

import './teamSection.scss';

export const TeamSection: FC = () => {
  const { isDesktop } = useDevice();

  return (
    <Section className="about-us-section about-us-section-team">
      <div className="images">
        <Rings type="gold" rotate={-45} className="dots"/>
        {isDesktop && <Dots color="gold"/>}
      </div>
      <Title align="center" color="gold-deep">Our team</Title>
      <Subtitle align="center" color="gold-deep">
        We're not just building a successful company; we're building a sustainable future. When you partner with
        Digital World Visions, you get a team dedicated to your success, a commitment to innovation, and a deep respect
        for our environment. Let us be your trusted partner in navigating the exciting and ever-evolving digital
        landscape – responsibly and collaboratively.
      </Subtitle>
    </Section>
  );
};
