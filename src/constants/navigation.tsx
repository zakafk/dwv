import {ReactNode} from "react";

import { Home, AboutUs } from "../module";

export const PATH_NAMES = {
  HOME: '/',
  ABOUT_US: '/about',
  PARTNERS: '/partners',
  PROJECTS: '/projects',
  ABOUT_COOKIE: '/about-cookie',
  ABOUT_TERMS:'/about-terms',
}

type TNavMap = {
  title: string;
  to: string;
  element: ReactNode;
};

export const NAV_MAP: TNavMap[] = [
  { title: 'Home', to: PATH_NAMES.HOME, element: <Home />},
  { title: 'About us', to: PATH_NAMES.ABOUT_US, element: <AboutUs /> },
  // { title: 'Partners', to: PATH_NAMES.PARTNERS, element: <div>Partners</div> },
  // { title: 'Our Projects', to: PATH_NAMES.PROJECTS, element: <div>Our Projects</div> },
];
