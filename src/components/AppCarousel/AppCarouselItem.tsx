import { FC } from 'react';

import { Picture } from '../Picture';

interface IAppCarouselItem {
  src: string;
  title?: string;
}

export const AppCarouselItem: FC<IAppCarouselItem> = ({ title, src }) => {
  return (
    <div>
      <Picture src={src} />
      {!!title && <h3>{title}</h3>}
    </div>
  );
};
