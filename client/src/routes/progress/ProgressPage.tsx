import './ProgressPage.scss';

import { FC } from 'react';

import { PageHeader } from 'components';

const ProgressPage: FC = () => {
  return (
    <div id='progress-page' className='page'>
      <PageHeader headerText='Progress' />
    </div>
  );
};

export default ProgressPage;
