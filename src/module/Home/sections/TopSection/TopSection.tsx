import { FC, RefObject } from 'react';

import { Button } from '../../../../components/Button';
import { ScrollDown } from '../../../../components/ScrollDown';
import { Section } from '../../../../components/Section';

import './topSection.scss';

interface ITopSectionProps {
  element:  RefObject<HTMLDivElement>;
}

export const TopSection: FC<ITopSectionProps> = ({ element }) => (
  <Section className="home-section home-section-top">
    <div className="top-section">
      <h1 className="top-section-title">
        Digital <span className="bold">SOLUTION</span> which <br />
        <span className="bold">TRANSFORMS</span> challenges <br />
        to your <span className="bold">STRENGTH</span>
      </h1>
      <h3 className="top-section-subtitle">
        <span className="top-section-subtitle-part">At Digital World Visions - FZCO, we are a forward-thinking team dedicated</span>{' '}
        to crafting digital solutions that pave the way for your future success.
      </h3>
      <Button text="Contact us" className="top-section-button" />
    </div>
    <ScrollDown element={element} />
  </Section>
);
