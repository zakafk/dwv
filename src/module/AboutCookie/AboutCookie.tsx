import { FC } from 'react';

import { Subtitle } from '../../components/Typography';
import { Section } from '../../components/Section';

import styles from './aboutCookie.module.scss';

export const AboutCookie: FC = () => {
  return (
    <Section className={styles['cookie-section']}>
      <Subtitle color="violet-deep" className={styles.description}>
        <p>1. Cookies Policy</p>
        <p>
          This website uses cookies to improve user experience. By using our website, you consent to all cookies in
          accordance with our Cookie Policy.
        </p>
        <p>2. What are cookies?</p>
        <p>
          Cookies are small text files placed on your computer, smartphone, or other devices when you visit a website.
          They are commonly used to make websites work more efficiently, as well as to provide information to the owners
          of the site.
        </p>
        <p>3. How do we use cookies?</p>
        <p>We use cookies for a variety of purposes, including:</p>
        <ul className={styles.list}>
          <li>To provide personalized content and enhance your browsing experience</li>
          <li>To analyze how users interact with our website and improve its performance.</li>
          <li>To remember your preferences and settings.</li>
        </ul>
        <p>4. What types of cookies do we use?</p>
        <ul className={styles.list}>
          <li>Essential cookies: These are necessary for the website to function properly. They enable core functionality such as page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</li>
          <li>Analytical/performance cookies: These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>
          <li>Functionality cookies: These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences
            (for example, your choice of language or region).</li>
        </ul>
        <p>5. How to control cookies</p>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer,
          and you can set most browsers to prevent them from being placed. If you do this, however, you may have to
          manually adjust some preferences every time you visit a site, and some services and functionalities may not work.
        </p>
        <p>6. Changes to this Cookies Policy</p>
        <p>
          We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new
          Cookies Policy on this page.
        </p>
        <p>7. Contact Us</p>
        <p>If you have any questions about this Cookies Policy, please contact us.</p>
      </Subtitle>
    </Section>
  );
}
