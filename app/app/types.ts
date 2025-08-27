export interface MenuItem {
    text: string;
    url: string;
    children?: MenuItem[];
  }
  
  export interface MenuProps {
    items: MenuItem[];
  }
  