export interface MetaProps {
  keepAlive?: boolean;
  title: string;
  key?: string;
  menuNum?: number;
}

export interface RouteObject {
  name?: string;
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  meta?: MetaProps;
  isLink?: string;
}
