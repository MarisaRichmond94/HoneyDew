import './DewsPage.scss';

import { FC } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { FiEdit, FiPlusCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router';

import sadMelon from 'assets/melon/sad_melon.png';
import { Loading, PageHeader } from 'components';
import { DewProvider, useDew, useUser } from 'providers';
import { ActionButton, Menu, MenuType } from 'routes/components';
import { MANAGE_SUB_ROUTES, ROUTES } from 'settings';

const DewsPage: FC = () => {
  const { dews } = useUser();
  const navigate = useNavigate();

  if (!dews) return <Loading message='Loading dews...' />;

  const dewContent = dews.length === 0
    ? <EmptyDews />
    : <Dews />;

  return (
    <DewProvider dews={dews}>
      <div id='dews-page' className='page page-content'>
        <div>
          <PageHeader headerText='Dews' />
          <Menu type={MenuType.top}>
            <ActionButton onClick={() => console.log('create new dew')}>
              Create New Dew
              <FiPlusCircle />
            </ActionButton>
          </Menu>
        </div>
        <div id={dews.length === 0 ? 'empty-dew-container' : 'dew-container'}>
          {dewContent}
        </div>
        <Menu type={MenuType.bottom}>
          <ActionButton onClick={() => navigate(ROUTES.manageRoute)}>
            Back
            <BsArrowReturnLeft />
          </ActionButton>
        </Menu>
      </div>
    </DewProvider>
  );
};

const EmptyDews: FC = () => (
  <div className='melon-container'>
    <img alt='' className='melon' src={sadMelon} />
    <div>You don't have any dews set up yet...</div>
  </div>
);

const Dews: FC = () => {
  const { dews } = useDew();
  const navigate = useNavigate();

  return (
    <div id='dews-list'>
      {
        dews!!.map((dew) => {
          return (
            <div className='dew-container' key={`dews-${dew.id}`}>
              <ActionButton onClick={() => navigate(`${MANAGE_SUB_ROUTES.dewsRoute}/${dew.id}`)}>
                {dew.name}
                <FiEdit />
              </ActionButton>
            </div>
          )
        })
      }
    </div>
  );
};

export default DewsPage;
