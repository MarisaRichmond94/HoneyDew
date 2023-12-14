import './DewsPage.scss';

import { FC } from 'react';

import { PageHeader } from 'components';

const DewsPage: FC = () => {
  return (
    <div id='rooms-page' className='page'>
      <PageHeader headerText='Dews' />
    </div>
  );
};

export default DewsPage;
