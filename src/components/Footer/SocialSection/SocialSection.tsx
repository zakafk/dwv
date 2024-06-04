import { FC } from 'react';

import twitter_src from '../../../assets/social/twitter.svg';
import instagram_src from '../../../assets/social/instagram.svg';
import facebook_src from '../../../assets/social/facebook.svg';
import linkedin_src from '../../../assets/social/linkedin_gold.svg';
import { INSTAGRAM_URL, TWITTER_URL, LINKEDIN_URL, FACEBOOK_URL } from '../../../constants/urls';
import { Logo } from '../../Logo';
import { Link } from './Link';

export const SocialSection: FC = () => (
  <>
    <Logo size={20} />
    <div className="social">
      <Link src={twitter_src} href={TWITTER_URL} target="_blank"  className="d-none"/>
      <Link src={facebook_src} href={FACEBOOK_URL} target="_blank" />
      <Link src={linkedin_src} href={LINKEDIN_URL} target="_blank" />
      <Link src={instagram_src} href={INSTAGRAM_URL} target="_blank" />
    </div>
  </>
);
