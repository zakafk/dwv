import { FC, useCallback, useState } from 'react';

import { AppModal } from '../../AppModal';
import { Navigation } from '../Navigation';

export const MobileNavigation: FC = () => {
  const [ isOpen, setOpen] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div className="nav-burger" onClick={handleOpenMenu}>
        <div className="nav-burger-line" />
        <div className="nav-burger-line" />
        <div className="nav-burger-line" />
      </div>
      <AppModal show={isOpen} onHide={handleCloseMenu} fullscreen className="nav-modal">
        <Navigation />
      </AppModal>
    </>
  );
};
