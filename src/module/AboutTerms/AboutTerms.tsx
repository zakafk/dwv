import { FC } from 'react';

import { Subtitle } from '../../components/Typography';
import { Section } from '../../components/Section';

import styles from './aboutTerms.module.scss';

export const AboutTerms: FC = () => (
  <Section className={styles['terms-section']}>
    <Subtitle color="violet-deep" className={styles.description}>
      <p>Website Terms and Conditions</p>
      <p>
        Welcome to Digital World Visions FZCO’s (hereinafter DWV) website. By accessing and using this website,
        you agree to comply with and be bound by the following terms and conditions of use. Please read these terms
        carefully before using our website.
      </p>
      <p>1. Use of Website</p>
      <p>
        The content of the pages of this website is for your general information and use only. It is subject to change
        without notice.
      </p>
      <p>2. Intellectual Property</p>
      <p>
        All content included on this website, such as text, graphics, logos, button icons, images, audio clips, digital
        downloads, data compilations, and software, is the property of DWV or its content suppliers and protected by
        international copyright laws. The compilation of all content on this website is the exclusive property of DWV
        and protected by international copyright laws.
      </p>
      <p>3. Restrictions</p>
      <p>
        You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create
        derivative works from, transfer, or sell any information, software, products, or services obtained from this
        website.
      </p>
      <p>4. Links to Other Websites</p>
      <p>
        Our website may contain links to third-party websites or services that are not owned or controlled by DWV. DWV
        has no control over and assumes no responsibility for, the content, privacy policies, or practices of any
        third-party websites or services. You further acknowledge and agree that DWV shall not be responsible or liable,
        directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use
        of or reliance on any such content, goods, or services available on or through any such websites or services.
      </p>
      <p>5. Limitation of Liability</p>
      <p>
        In no event shall DWV, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for
        any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of
        profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or
        inability to access or use the website; (ii) any conduct or content of any third party on the website; (iii)
        any content obtained from the website; and (iv) unauthorized access, use, or alteration of your transmissions
        or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether
        or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found
        to have failed of its essential purpose.
      </p>
      <p>6. Changes</p>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these terms at any time. What constitutes a
        material change will be determined at our sole discretion.
      </p>
      <p>7. Governing Law</p>
      <p>
        These terms and conditions are governed by and construed in accordance with the laws of United Arab Emirates
        and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
      </p>
      <p>8. Contact Us</p>
      <p>If you have any questions about these terms and conditions, please contact us.</p>
    </Subtitle>
  </Section>
);
