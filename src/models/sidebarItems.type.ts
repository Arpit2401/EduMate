export interface SubMenuInterface {
  id: number;
  name: string;
  path: string;
}

export interface SidebarItemInterface {
  id: number;
  name: string;
  subMenu?: SubMenuInterface[];
  icon: string;
  path: string;
}
