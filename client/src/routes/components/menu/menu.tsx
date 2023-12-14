import './menu.scss';

import { FC, PropsWithChildren } from 'react';

export enum MenuType {
  top = 'top',
  bottom = 'bottom',
};

interface MenuProps extends PropsWithChildren {
  type?: MenuType,
};

export const Menu: FC<MenuProps> = ({
  children,
  type = MenuType.top,
}) => {
  return (
    <div className={`menu ${type}`}>
      {children}
    </div>
  );
};
