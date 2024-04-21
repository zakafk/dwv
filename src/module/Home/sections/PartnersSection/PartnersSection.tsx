import { FC } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Section } from '../../../../components/Section';
import { Picture } from '../../../../components/Picture';
import { Button } from '../../../../components/Button';
import dots_blue_src from '../../../../assets/dots_blue.svg';

import partners_src from './assets/partners.jpeg';
import fun_fact_src from './assets/fun_fact.png';

import './partnersSection.scss';

export const PartnersSection: FC = () => (
  <Section className="home-section home-section-partners">
    <div className="home-section-partners-row">
      <div className="home-section-partners-container">
        <div className="tag">Why Choose us</div>
        <h3 className="title">Choose Us to Grow Your Business</h3>
        <p className="description">
          Our partners achieve their future goals with our support.
          Scale your business to new heights with our expertise.
        </p>
        <Button text="Contact us" type="secondary" />
      </div>
      <div className="img-container">
        <div className="main" />
        <Picture src={fun_fact_src} className="secondary" />
      </div>
    </div>
    <Picture src={dots_blue_src} className="dots"/>
  </Section>
);
