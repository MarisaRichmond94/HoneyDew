import './action_button.scss';

import { FC, PropsWithChildren } from 'react';

import { HDButton } from 'components';

interface ActionButtonProps extends PropsWithChildren {
  onClick: (event: any) => void,

  classNamesOverride?: string[],
  id?: string,
  isDisabled?: boolean,
  style?: object,
};

export const ActionButton: FC<ActionButtonProps> = (props) => {
  return (
    <HDButton
      classNames={['action-button', 'secondary-blue', ...(props.classNamesOverride || [])]}
      {...props}
    >
      <div className='action-button-content'>
        {props.children}
      </div>
    </HDButton>
  );
};
