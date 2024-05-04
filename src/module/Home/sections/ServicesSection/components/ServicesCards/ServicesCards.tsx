import { FC, useMemo } from 'react';

import { Card } from './Card';
import { cardsData } from './Card/cardsData';

import './servicesCards.scss';

export const ServicesCards: FC = () => {
  const data = useMemo(() => (
    cardsData.map(({ id, title, modalProps, icon }) =>
      <Card key={id} title={title} icon={icon} modalProps={modalProps} />
    )
  ), [cardsData]);

  return (
    <div className="services-cards-container">{data}</div>
  );
};
