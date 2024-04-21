import { FC } from 'react';

import { Section } from '../Section';

import './copyright.scss';

export const Copyright: FC = () => (
  <Section className="section-copyright">
    <span >Copyright © 2024 </span>
    <div className="policy">
      <span>Term of use</span>
      <span>Privacy Policy</span>
      <span>Cookie Policy</span>
    </div>
  </Section>
);
