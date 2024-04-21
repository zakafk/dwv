import {ReactNode} from "react";

import { Home, AboutUs } from "../module";

type TNavMap = {
  title: string;
  to: string;
  element: ReactNode;
};

export const NAV_MAP: TNavMap[] = [
  { title: 'Home', to: '/', element: <Home />},
  { title: 'About us', to: '/about', element: <AboutUs /> },
  { title: 'Partners', to: '/partners', element: <div>Partners</div> },
  { title: 'Our Projects', to: '/projects', element: <div>Our Projects</div> },
];
