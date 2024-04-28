import { FC } from 'react';

import { PATH_NAMES } from '../../../constants/navigation';

import { CompanyItem } from './CompanyItem';

export const CompanySection: FC = () => {
  return (
    <ul className="section-footer-container-item-list">
      <CompanyItem title="About Us" to={PATH_NAMES.ABOUT_US} />
      <CompanyItem title="Contact Info" to="/" />
      <CompanyItem title="Our Service" to="/" />
      <CompanyItem title="Career" to="/" />
    </ul>
  );
};
