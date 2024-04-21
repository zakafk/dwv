import { FC } from 'react';

import { Section } from '../Section';
import { Copyright } from '../Copyright';
import { SocialSection } from './SocialSection';
import { CompanySection } from './CompanySection';
import { ContactUsSection } from './ContactUsSection';

import './footer.scss';

export const Footer: FC = () => (
  <>
    <Section className="section-footer">
      <div className="section-footer-container">
        <div className="section-footer-container-item">
          <SocialSection />
        </div>
        <div className="section-footer-container-item">
          <p className="section-footer-container-item-title">Company</p>
          <CompanySection />
        </div>
        <div className="section-footer-container-item">
          <p className="section-footer-container-item-title">Contact us</p>
          <ContactUsSection />
        </div>
      </div>
    </Section>
    <Copyright />
  </>
);
