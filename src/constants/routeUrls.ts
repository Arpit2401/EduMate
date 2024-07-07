export const routePath = {
  HOME: '/',
  ERROR404: '*',
  ABOUT: 'about',
  // EVENTS: 'events',
  // EVENT_DETAIL: 'events/detail',
  ADMISSIONS: 'admissions',
  CAREERS: 'careers',
  CONTACT: 'contact',
};

export const routeLink: Record<string, string> = {
  HOME: '/',
  ABOUT: `/${routePath.ABOUT}`,
  // EVENTS: `/${routePath.EVENTS}`,
  // EVENT_DETAIL: `/${routePath.EVENTS}/${routePath.EVENT_DETAIL}`,
  ADMISSIONS: `/${routePath.ADMISSIONS}`,
  CAREERS: `/${routePath.CAREERS}`,
  CONTACT: `/${routePath.CONTACT}`,
};
