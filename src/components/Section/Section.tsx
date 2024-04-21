import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './section.scss';

interface ISectionProps {
  children: ReactNode;
  className?: string;
}

export const Section: FC<ISectionProps> = ({ className, children }) => (
  <section className={classNames('section', className)}>
    {children}
  </section>
);
