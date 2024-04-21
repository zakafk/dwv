import { FC, ReactNode } from 'react';
import Container from 'react-bootstrap/Container';

import './mainLayout.scss';

interface IMainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => (
  <Container fluid className="main-container">{children}</Container>
);
