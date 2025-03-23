export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Hero {
  title: string;
  subtitle: string;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
}
