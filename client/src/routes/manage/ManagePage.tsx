import './ManagePage.scss';

import { FC } from 'react';
import { GiBroom } from 'react-icons/gi';
import { MdMeetingRoom } from 'react-icons/md';
import { useNavigate } from 'react-router';

import { PageHeader } from 'components';
import { MANAGE_SUB_ROUTES } from 'settings';
import { ActionButton } from 'routes/components';

const ManagePage: FC = () => {
  const navigate = useNavigate();

  return (
    <div id='manage-page' className='page'>
      <PageHeader headerText='Manage' />
      <ActionButton onClick={() => navigate(MANAGE_SUB_ROUTES.roomsRoute)}>
        <div>Rooms</div>
        <MdMeetingRoom />
      </ActionButton>
      <ActionButton onClick={() => navigate(MANAGE_SUB_ROUTES.dewsRoute)}>
        <div>Dews</div>
        <GiBroom />
      </ActionButton>
    </div>
  );
};

export default ManagePage;
