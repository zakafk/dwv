import { FC } from 'react';

import twitter_src from '../../../assets/social/twitter.svg';
import instagram_src from '../../../assets/social/instagram.svg';
import youtube_src from '../../../assets/social/youtube.svg';
import { INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL } from '../../../constants/urls';
import { Logo } from '../../Logo';
import { Link } from './Link';

export const SocialSection: FC = () => (
  <>
    <Logo size={20} />
    <div className="social d-none">
      <Link src={twitter_src} href={TWITTER_URL} target="_blank" />
      <Link src={instagram_src} href={INSTAGRAM_URL} target="_blank"/>
      <Link src={youtube_src} href={YOUTUBE_URL} target="_blank" />
    </div>
  </>
);
