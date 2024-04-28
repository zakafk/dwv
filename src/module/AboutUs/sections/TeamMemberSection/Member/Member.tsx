import { FC } from 'react';

import { Picture } from '../../../../../components/Picture';
import linkedin from '../../../../../assets/social/linkedin.svg';
import { TPosition } from '../TeamMemberSection';

import './member.scss';
import classNames from "classnames";

interface IMemberProps {
  name: string;
  role: string;
  src: string;
  position?: TPosition;
}

export const Member: FC<IMemberProps> = ({ name, role, src, position = 'left' }) => {
  return (
    <div className="member">
      <Picture src={src} className="main-img" />
      <div className={classNames('label-container', `label-container-${position}`)}>
        <div className="label">
          <div>
            <p className="name">{name}</p>
            <p className="role">{role}</p>
          </div>
          <Picture src={linkedin} className="linkedin" />
        </div>
      </div>
    </div>
  );
};
