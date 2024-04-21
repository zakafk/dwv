import { FC, useRef } from 'react';

import {
  TopSection,
  ServicesSection,
  AboutUsSection,
  PartnersSection,
  LogoSection,
  ProjectsSection,
} from './sections';

import './home.scss';

export const Home: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <TopSection element={ref} />
      <div ref={ref}>
        <ServicesSection />
      </div>
      <AboutUsSection />
      <PartnersSection />
      <LogoSection />
      <ProjectsSection />
    </>
  );
};
