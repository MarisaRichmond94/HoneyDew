import './ManagePage.scss';

import { FC } from 'react';

import { PageHeader } from 'components';

const PlanPage: FC = () => {
  return (
    <div id='manage-page' className='page'>
      <PageHeader headerText='Manage' />
    </div>
  );
};

export default PlanPage;
