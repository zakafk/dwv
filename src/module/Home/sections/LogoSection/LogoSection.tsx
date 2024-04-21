import { FC } from 'react';

import { Section } from '../../../../components/Section';
import { Picture } from '../../../../components/Picture';

import mock_logo_src from './assets/mock_logo.svg';

import './logoSection.scss';

export const LogoSection: FC = () => (
  <Section className="home-section home-section-logo">
    <div className="items-wrap">
      <div className="items marquee">
        <div className="item"><Picture src={mock_logo_src} /></div>
        <div className="item"><Picture src={mock_logo_src} /></div>
        <div className="item"><Picture src={mock_logo_src} /></div>
        <div className="item"><Picture src={mock_logo_src} /></div>
        <div className="item"><Picture src={mock_logo_src} /></div>
        <div className="item"><Picture src={mock_logo_src} /></div>
      </div>
      <div aria-hidden="true" className="items marquee">
        <div className="item"><Picture src={mock_logo_src} /></div>
        <div className="item"><Picture src={mock_logo_src} /></div>
        <div className="item"><Picture src={mock_logo_src} /></div>
        <div className="item"><Picture src={mock_logo_src} /></div>
        <div className="item"><Picture src={mock_logo_src} /></div>
        <div className="item"><Picture src={mock_logo_src} /></div>
      </div>
    </div>
  </Section>
);
