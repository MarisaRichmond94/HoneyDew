import './button.scss';

import { FC, PropsWithChildren } from 'react';

import { ButtonSize, ButtonType, TransparentTypes } from './button.types';

interface HDButtonProps extends PropsWithChildren {
  onClick: (event: any) => void,

  classNames?: string[],
  id?: string,
  isDisabled?: boolean,
  size?: ButtonSize,
  style?: object,
  type?: ButtonType,
};

const HDButton: FC<HDButtonProps> = ({
  children,
  onClick,

  classNames = [],
  id,
  isDisabled = false,
  size = ButtonSize.md,
  style = {},
  type = ButtonType.solid,
}) => (
  <button
    className={
      ['hd-button', size, type, type in TransparentTypes ? 'transparent' : '', ...classNames].join(' ')
    }
    disabled={isDisabled}
    id={id}
    onClick={onClick}
    style={style}
    type='button'
  >
    {children}
  </button>
);

export default HDButton;
