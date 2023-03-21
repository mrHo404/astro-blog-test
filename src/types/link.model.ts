export type LinkProps = {
  text: string;
  href: string;
  style: Style;
  icon?: {
    name: string;
    side: Side;
  };
  isFilled?: boolean;
  borderVisible?: boolean;
  classes?: string;
  // rest: unknown; // TODO: type for rest
};

export const SIDE = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;
export type Side = keyof typeof SIDE;

export const STYLE = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;
export type Style = ObjectValues<typeof STYLE>;

type ObjectValues<T> = T[keyof T];
