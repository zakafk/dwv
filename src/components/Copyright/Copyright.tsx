import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../Section';
import { PATH_NAMES } from '../../constants/navigation';

import './copyright.scss';

export const Copyright: FC = () => (
  <Section className="section-copyright">
    <span >Copyright © 2024 </span>
    <div className="policy">
      <Link to={PATH_NAMES.ABOUT_TERMS} className="link">Terms of use</Link>
      <Link to={PATH_NAMES.PRIVACY_POLICY}  className="link">Privacy Policy</Link>
      <Link to={PATH_NAMES.ABOUT_COOKIE} className="link">Cookie Policy</Link>
    </div>
  </Section>
);
