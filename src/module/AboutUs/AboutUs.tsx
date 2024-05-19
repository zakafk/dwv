import { FC } from 'react';

import george from '../../assets/teamMembers/george-amanatidze.png';
import anastasia from '../../assets/teamMembers/anastasia_amanatidze.jpg';
import { AboutUsManiSection, TeamSection, TeamMemberSection, FormSection } from './sections';

import './aboutUs.scss';

export const AboutUs: FC = () => (
  <>
    <AboutUsManiSection />
    <TeamSection />
    <TeamMemberSection
      name="George Amanatidze"
      role="General manager"
      src={george}
      message="I bring a wealth of experience as an IT Manager with a strong
      commitment to sustainability and a keen interest in emerging technologies. My background includes managing
      intricate projects in system development and implementation. Currently, I am pursuing an Executive MBA
      at HULT International Business School's Dubai campus."
      link="https://www.linkedin.com/in/george-amanatidze-a24638207"
    />
    <TeamMemberSection
      name="Anastasia Amanatidze"
      role="Co-founder"
      src={anastasia}
      message="Anastasia brings a wealth of experience as an IT Manager with a strong
      commitment to sustainability and a keen interest in emerging technologies. Her background includes managing
      intricate projects in system development and implementation. Currently , Anastasia is pursuing an Executive MBA
      at HULT International Business School's Dubai campus."
      position="right"
      link="https://www.linkedin.com/in/anastasiaamanatidze"
    />
    <FormSection />
  </>
);
