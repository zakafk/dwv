import { FC } from 'react';
import classNames from 'classnames';

import { Picture } from '../../../../../components/Picture';
import linkedin from '../../../../../assets/social/linkedin.svg';
import { TPosition } from '../TeamMemberSection';

import './member.scss';

interface IMemberProps {
  name: string;
  role: string;
  src: string;
  position?: TPosition;
  link?: string;
}

export const Member: FC<IMemberProps> = ({ name, role, src, position = 'left', link = '#' }) => {
  return (
    <div className="member">
      <Picture src={src} className="main-img" />
      <div className={classNames('label-container', `label-container-${position}`)}>
        <div className="label">
          <div>
            <p className="name">{name}</p>
            <p className="role">{role}</p>
          </div>
          <a href={link} className="link" target="_blank">
            <Picture src={linkedin} className="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};
