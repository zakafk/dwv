import { FC } from 'react';

import { Subtitle } from '../../components/Typography';
import { Section } from '../../components/Section';

import styles from './privacyPolicy.module.scss';

export const PrivacyPolicy: FC = () => (
  <Section className={styles['privacy-section']}>
    <Subtitle color="violet-deep" className={styles.description}>
      <p>Data Protection Agreement for Digital World Visions - FZCO</p>
      <p>This Data Protection Agreement ("Agreement") is entered into force as of 01.05.2024, by and between:</p>
      <ul className={styles.list}>
        <li>
          Digital World Visions - FZCO, hereinafter referred to as the "Company", a company incorporated under the laws
          of the UAE, with its registered office at Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United
          Arab Emirates, acting as the "Controller", and
        </li>
        <li>
          Users, individuals who access or use the Company's website digitalworldvisions.ae/digitalworldvisions.com
          (the "Website").
        </li>
      </ul>
      <p>1. Definitions</p>
      <ul className={styles.list}>
        <li>
          Personal Data: Any information relating to an identified or identifiable natural person. Examples include name,
          email address, IP address, and browsing history (if collected).
        </li>
        <li>User: Any individual who accesses or uses the Website.</li>
      </ul>
      <p>2. Data Processing</p>
      <ul className={styles.list}>
        <li>
          The Company will only collect and process Personal Data necessary for the operation of the Website and to
          provide services to Users.
        </li>
        <li>Personal Data will be collected in a fair and lawful manner with the knowledge and consent of the User.</li>
        <li>
          Appropriate technical and organizational measures will be implemented to protect Personal Data against
          unauthorized or unlawful processing and accidental loss, destruction, or damage.
        </li>
      </ul>
      <p>3. User Rights</p>
      <ul className={styles.list}>
        <li>Users have the right to access, rectify, erase, and restrict the processing of their Personal Data.</li>
        <li>Users have the right to withdraw consent at any time.</li>
      </ul>
      <p>4. Data Retention</p>
      <ul className={styles.list}>
        <li>
          Personal Data will only be retained for as long as necessary for the purposes for which it was collected and
          processed.
        </li>
        <li>Procedures will be in place for the secure deletion of Personal Data when it is no longer required.</li>
      </ul>
      <p>5. Data Breaches</p>
      <ul className={styles.list}>
        <li>The Company will notify the relevant authorities and Users in the event of a data breach.</li>
      </ul>
      <p>6. Governing Law and Jurisdiction</p>
      <ul className={styles.list}>
        <li>
          This Agreement shall be governed by and construed in accordance with the laws of the UAE. Any dispute arising
          out of or relating to this Agreement shall be subject to the exclusive jurisdiction of the courts/arbitration
          of the UAE.
        </li>
      </ul>
      <p>IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written above.</p>
      <p>
        Digital World Visions - FZCO<br />
        George Amanatidze<br />
        General Manager
      </p>
    </Subtitle>
  </Section>
);
