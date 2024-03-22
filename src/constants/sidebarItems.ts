import { SidebarItemInterface } from '@models';

export const sidebarPrimaryItems: SidebarItemInterface[] = [
  {
    id: 1,
    name: 'Overview',
    icon: 'icon-overview',
    path: '/overview',
  },
  {
    id: 2,
    name: 'Pages',
    icon: 'icon-pages',
    subMenu: [],
    path: '/pages',
  },
  {
    id: 3,
    name: 'Sales',
    subMenu: [
      {
        id: 1,
        name: 'Product List',
        path: '/product-list',
      },
      {
        id: 2,
        name: 'Billing',
        path: '/billing',
      },
      {
        id: 3,
        name: 'Invoice',
        path: '/invoice',
      },
      {
        id: 4,
        name: 'Add Sales',
        path: '/add-sales',
      },
    ],
    icon: 'icon-sales',
    path: '/sales',
  },
  {
    id: 4,
    name: 'Messages',
    icon: 'icon-messages',
    path: '/messages',
  },
  {
    id: 5,
    name: 'Authentication',
    icon: 'icon-authenticate',
    path: '/authenticate',
  },
];

export const sidebarSecondaryItems: SidebarItemInterface[] = [
  {
    id: 6,
    name: 'Docs',
    icon: 'icon-docs',
    path: '/docs',
  },
  {
    id: 7,
    name: 'Components',
    icon: 'icon-components',
    path: '/components',
  },
  {
    id: 8,
    name: 'Help',
    icon: 'icon-support',
    path: 'help',
  },
  {
    id: 9,
    name: 'Logout',
    icon: 'icon-login',
    path: 'login',
  },
];
