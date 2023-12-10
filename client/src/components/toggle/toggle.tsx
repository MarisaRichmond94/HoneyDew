import './toggle.scss';

import { FC } from 'react';

interface ToggleButtonProps {
  onClick: () => void,

  classNames?: string[],
  disabled?: boolean,
  hideText?: boolean,
  selected?: boolean,
  selectedText?: string,
  unselectedText?: string,
};

export const ToggleButton: FC<ToggleButtonProps> = ({
  onClick,

  classNames = [],
  disabled = false,
  hideText = false,
  selected = false,
  selectedText = 'on',
  unselectedText = 'off',
}) => (
  <div
    className={[
      'toggle',
      disabled ? 'disabled' : '',
      selected ? 'selected' : 'unselected',
      hideText ? 'text-hidden' : '',
      ...classNames
    ].join(' ')}
    onClick={onClick}
  >
    <div className='toggle-button'>
      {selected ? selectedText : unselectedText}
    </div>
  </div>
);
