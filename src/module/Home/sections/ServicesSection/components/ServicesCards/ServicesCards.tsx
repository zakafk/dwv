import { FC, useMemo } from 'react';

import { Card } from './Card';
import { cardsData } from './Card/cardsData';

import './servicesCards.scss';

export const ServicesCards: FC = () => {
    const data = useMemo(() => (
      cardsData.map(({ id, title, modalProps }) => <Card key={id} title={title} modalProps={modalProps} />)
    ), [cardsData]);

    return (
      <div className="services-cards-container">{data}</div>
    );
};
