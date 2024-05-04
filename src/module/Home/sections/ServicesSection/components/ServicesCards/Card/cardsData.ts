import { v4 as getUuid } from 'uuid';

import code_icon from '../../../assets/icons/card_code_icon.svg';
import gamification_icon from '../../../assets/icons/card_gamification_icon.svg'
import structure_icon from '../../../assets/icons/card_structure_icon.svg';
import hand_icon from '../../../assets/icons/card_hand_stars_icon.svg';
import notebook_icon from '../../../assets/icons/card_notebook_icon.svg';
import chart_icon from '../../../assets/icons/card_chart_icon.svg';
import user_icon from '../../../assets/icons/card_user_speak_icon.svg';
import circle_icon from '../../../assets/icons/card_сircle_icon.svg';

export const cardsData: Record<string, any>[] = [
  {
    id: getUuid(),
    title: 'Digital Transformation',
    modalProps: {
      title: 'Digital Transformation',
      description: 'Whether it\'s websites, portals, applications, or AI technologies, we tailor every project to meet your business needs We help organize and transform your processes, ensuring they are not only efficient but also minimize environmental impact. Our digital solutions are designed with sustainability at their core, reducing carbon footprints and promoting green practices.',
    },
    icon: circle_icon,
  },
  {
    id: getUuid(),
    title: 'Sustainable Innovation',
    modalProps: {
      title: 'Sustainable Innovation',
      description: 'Our innovative digital production incorporates eco-friendly technologies and methodologies, aligning with your business objectives and environmental responsibilities.',
    },
    icon: hand_icon,
  },
  {
      id: getUuid(),
      title: 'Digital Technology Analysis',
      modalProps: {
        title: 'Digital Technology Analysis',
        description: 'By examining your current digital assets, we identify opportunities for enhancement, ensuring they serve your future needs more effectively.',
      },
      icon: chart_icon,
    },
  {
      id: getUuid(),
      title: 'AI Integration',
      modalProps: {
        title: 'AI Integration',
        description: 'We specialize in integrating AI technologies into your existing digital platforms, elevating their performance and intelligence.',
      },
      icon: gamification_icon,
    },
  {
      id: getUuid(),
      title: 'Consultation Services',
      modalProps: {
        title: 'Consultation Services',
        description: 'Our experts provide insightful advice on optimizing your digital platforms to meet both your business and customer expectations.',
      },
      icon: user_icon,
    },
  {
      id: getUuid(),
      title: 'Comprehensive IT Consultancy',
      modalProps: {
        title: 'Comprehensive IT Consultancy',
        description: "From envisioning future IT solutions to navigating current technological landscapes, we offer a full spectrum of consultancy services.",
      },
      icon: code_icon,
    },
  {
    id: getUuid(),
    title: 'Software Development and Enhancement',
    modalProps: {
      title: 'Software Development and Enhancement',
      description: 'We focus on building, creating, designing, and improving your software\'s functionality to streamline your daily operations.',
    },
    icon: structure_icon,
  },
  {
    id: getUuid(),
    title: 'Education and Improvement',
    modalProps: {
      title: 'Education and Improvement',
      description: 'We offer training and consulting on adopting sustainable digital practices, empowering you to leverage technology in a way that benefits both your business and the environment',
    },
    icon: notebook_icon,
  },
];
