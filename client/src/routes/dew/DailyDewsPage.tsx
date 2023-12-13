import './DailyDewsPage.scss';

import { FC } from 'react';

import { PageHeader } from 'components';

const DailyDewsPage: FC = () => (
    <div id='daily-dews-page' className='page'>
      <PageHeader headerText='Daily Dews' />
    </div>
  );

export default DailyDewsPage;
