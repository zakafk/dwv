import { FC, useCallback, RefObject } from 'react';

import arrowDownIcon from '../../assets/icons/arrow_down_icon.svg';
import { Picture } from '../Picture';

import './scrollDown.scss';

interface IScrollDownProps {
  element: RefObject<HTMLDivElement>;
}

export const ScrollDown: FC<IScrollDownProps> = ({ element }) => {
  const handleScroll = useCallback(() => {
    if(!element?.current) return;

    element.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [element]);

 return (
   <div className="scroll-down" onClick={handleScroll}>
    <span className="text">Scroll Down</span>
    <Picture src={arrowDownIcon}/>
  </div>
 );
};
