import {
  About,
  Admissions,
  Contact,
  Home,
  Jobs,
  Main,
} from '@screens';
import { RouteInterface } from '@models';
import { routePath } from './routeUrls';

export const mainRoute: RouteInterface[] = [
  {
    path: routePath.HOME,
    element: Home,
    isProtected: false,
  },
  {
    path: routePath.ERROR404,
    element: Main,
    isProtected: false,
  },
  {
    path: routePath.ABOUT,
    element: About,
    isProtected: false,
  },
  {
    path: routePath.ADMISSIONS,
    element: Admissions,
    isProtected: false,
  },
  // {
  //   path: routePath.EVENTS,
  //   element: Events,
  //   isProtected: false,
  // },
  {
    path: routePath.CAREERS,
    element: Jobs,
    isProtected: false,
  },
  {
    path: routePath.CONTACT,
    element: Contact,
    isProtected: false,
  },
  // {
  //   path: routePath.EVENT_DETAIL,
  //   element: EventDetails,
  //   isProtected: false,
  // },
];
