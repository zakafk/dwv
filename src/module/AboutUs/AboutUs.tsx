import { FC } from 'react';

import { AboutUsManiSection, TeamSection, TeamMemberSection } from './sections';
import george from '../../assets/teamMembers/george-amanatidze.png';

import './aboutUs.scss';

export const AboutUs: FC = () => (
  <>
    <AboutUsManiSection />
    <TeamSection />
    <TeamMemberSection
      name="George Amanatidze"
      role="General manager"
      src={george}
      message="Digital World is the destination and the way for our generation  to build a bright future. Through digital
            transformation, we endeavor to rethink and reshape our processes in a way that is in line with our
            environmental commitments, and  the core objective of Sustainability."
    />
    <TeamMemberSection
      name="Name"
      role="Role"
      src={george}
      message="message"
      position="right"
    />
    <TeamMemberSection
      name="Name"
      role="Role"
      src={george}
      message="message"
    />
  </>
);
