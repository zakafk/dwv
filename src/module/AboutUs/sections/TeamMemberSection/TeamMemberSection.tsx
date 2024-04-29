import { FC } from 'react';
import classNames from "classnames";

import { Section } from '../../../../components/Section';
import { Picture } from '../../../../components/Picture';
import quotes from '../../../../assets/icons/quotes.svg';
import { Rings } from '../../../../components/Rings';
import { Member } from './Member';

import './teamMemberSection.scss';

export type TPosition = 'left' | 'right';

interface ITeamMemberSectionPops {
  name: string;
  role: string;
  src: string;
  message: string;
  position?: TPosition;
}

export const TeamMemberSection: FC<ITeamMemberSectionPops> = ({
  name,
  role,
  src,
  message,
  position = 'left',
}) => (
  <Section className={classNames('about-us-section about-us-section-team-member', position)}>
    <div className={classNames('wrapper', `wrapper-${position}`)}>
      <Member
        name={name}
        role={role}
        src={src}
        position={position}
      />
      <div className="message-wrapper">
        <Picture src={quotes} className="img" />
        <p className="message">{message}</p>
        <Rings type="gold" className={classNames('rings', `rings-${position}`)} rotate={-40} />
      </div>
    </div>
  </Section>
);
