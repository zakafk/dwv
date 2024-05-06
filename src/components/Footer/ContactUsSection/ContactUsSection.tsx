import { FC } from 'react';

import email_src from '../../../assets/icons/email_icon.svg';
import whatsapp_src from '../../../assets/icons/whatsapp_icon.svg';
import phone_src from '../../../assets/icons/phone_icon.svg';
import address_marker_src from '../../../assets/icons/address_marker_icon.svg';
import { useDevice } from '../../../hooks/useDevice';
import { ContactUsItem } from './ContactUsItem';

const PHONE = '+971504052797';

export const ContactUsSection: FC = () => {
  const { isTablet, isMobile } = useDevice();

  const href = isTablet || isMobile ? `https://wa.me/${PHONE}` :
    `https://web.whatsapp.com/send/?phone=${PHONE}&type=phone_number&app_absent=0`

  return (
    <ul className="contacts-list">
      <ContactUsItem src={email_src} target="_blank" href="mailto:digitalworldvisions@gmail.com" title="digitalworldvisions@gmail.com" />
      <ContactUsItem src={whatsapp_src} target="_blank" href={href} title={PHONE} />
      <ContactUsItem src={phone_src} target="_blank" href={`tel:${PHONE}`} title={PHONE} />
      <ContactUsItem src={address_marker_src} title="Building A1, Digital Park, Silicon Oasis, Dubai, UAE" />
    </ul>
  );
};
