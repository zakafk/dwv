import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ICompanyItemProps {
  title: string;
  to: string;
}

export const CompanyItem: FC<ICompanyItemProps> = ({ title, to }) => (
  <li className="section-footer-container-item-list-item">
    <Link to={to}>{title}</Link>
  </li>
);
