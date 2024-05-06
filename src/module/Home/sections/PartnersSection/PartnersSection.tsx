import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Section } from '../../../../components/Section';
import { Picture } from '../../../../components/Picture';
import { Button } from '../../../../components/Button';
import { useDevice } from '../../../../hooks/useDevice';
import { Dots } from '../../../../components/Dots';
import { Subtitle, Title } from '../../../../components/Typography';
import { PATH_NAMES } from '../../../../constants/navigation';

import fun_fact_src from './assets/fun_fact.png';

import './partnersSection.scss';

export const PartnersSection: FC = () => {
  const { isDesktop } = useDevice();

  return (
    <Section className="home-section home-section-partners">
      <div className="home-section-partners-row">
        <div className="home-section-partners-container">
          <Title color="black">Choose Us to Grow Your Business</Title>
          <Subtitle color="gray-light">
            Our partners achieve their future goals with our support.
            Scale your business to new heights with our expertise.
          </Subtitle>
          <NavLink to={`${PATH_NAMES.ABOUT_US}#form`}>
            <Button text="Contact us" buttonType="secondary"/>
          </NavLink>
        </div>
        <div className="img-container">
          <div className="main"/>
          <Picture src={fun_fact_src} className="secondary d-none"/>
        </div>
      </div>
      {isDesktop && <Dots color="blue" className="dots" />}
    </Section>
  );
};
