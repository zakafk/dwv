import { FC, ReactNode } from 'react';
import Container from 'react-bootstrap/Container';

import { useScrollToTop } from '../../hooks/useScrollToTop';

import './mainLayout.scss';

interface IMainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  useScrollToTop();

  return (
    <Container fluid className="main-container position-relative">
      {children}
    </Container>
  );
};
