import { FC } from 'react';
import { Section } from '../../../../components/Section';

import { ServicesHeader } from './components/ServicesHeader';
import { ServicesCards } from './components/ServicesCards';

export const ServicesSection: FC = () => (
  <Section className="home-section home-section-services">
    <ServicesHeader />
    <ServicesCards />
  </Section>
);
