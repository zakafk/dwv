import { FC } from 'react';

import { TTarget } from '../../../types/TTarget';
import { Picture } from '../../Picture';
import classNames from "classnames";

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
          <Picture src={src} className="contacts-list-item-img"/>
          <span>{title}</span>
        </a>
      ) : (
        <>
          <Picture src={src} className="contacts-list-item-img"/>
          <span>{title}</span>
        </>
      )}
    </li>
  )
};
