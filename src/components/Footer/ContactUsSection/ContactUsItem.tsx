import { FC } from 'react';
import classNames from 'classnames';

import { TTarget } from '../../../types/TTarget';
import { Picture } from '../../Picture';

interface IContactUsItemProps {
  src: string;
  title: string;
  href?: string;
  target?: TTarget;
}

export const ContactUsItem: FC<IContactUsItemProps> = ({ href, target = 'self', src, title }) => {
  return (
    <li className={classNames('contacts-list-item', { 'extend': !!href })}>
      {!!href ? (
        <a className="contacts-list-item-link" href={href} target={target}>
          <div className="contacts-list-item-img-container">
            <Picture src={src} className="contacts-list-item-img"/>
          </div>
          <span>{title}</span>
        </a>
      ) : (
        <>
          <div className="contacts-list-item-img-container">
            <Picture src={src} className="contacts-list-item-img"/>
          </div>
          <span>{title}</span>
        </>
      )}
    </li>
  )
};
