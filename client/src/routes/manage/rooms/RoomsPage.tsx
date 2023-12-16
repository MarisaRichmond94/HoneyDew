import './RoomsPage.scss';

import { FC } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { FiEdit, FiPlusCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router';

import surprisedMelon from 'assets/melon/surprised_melon.png';
import { Loading, PageHeader } from 'components';
import { RoomProvider, useRoom, useUser } from 'providers';
import { ActionButton, Menu, MenuType } from 'routes/components';
import { MANAGE_SUB_ROUTES, ROUTES } from 'settings';

const RoomsPage: FC = () => {
  const { rooms } = useUser();
  const navigate = useNavigate();

  if (!rooms) return <Loading message='Loading rooms...' />;

  const roomContent = rooms.length === 0
    ? <EmptyRooms />
    : <Rooms />;

  return (
    <RoomProvider rooms={rooms}>
      <div id='rooms-page' className='page page-content'>
        <div>
          <PageHeader headerText='Rooms' />
          <Menu type={MenuType.top}>
            <ActionButton onClick={() => console.log('create new room')}>
              Create New Room
              <FiPlusCircle />
            </ActionButton>
          </Menu>
        </div>
        <div id={rooms.length === 0 ? 'empty-room-container' : 'room-container'}>
          {roomContent}
        </div>
        <Menu type={MenuType.bottom}>
          <ActionButton onClick={() => navigate(ROUTES.manageRoute)}>
            Back
            <BsArrowReturnLeft />
          </ActionButton>
        </Menu>
      </div>
    </RoomProvider>
  );
};

const EmptyRooms: FC = () => (
  <div className='melon-container'>
    <img alt='' className='melon' src={surprisedMelon} />
    <div>You don't have any rooms set up yet...</div>
  </div>
);

const Rooms: FC = () => {
  const { rooms } = useRoom();
  const navigate = useNavigate();

  return (
    <div id='rooms-list'>
      {
        rooms!!.map((room) => {
          return (
            <div className='room-container' key={`room-${room.id}`}>
              <ActionButton onClick={() => navigate(`${MANAGE_SUB_ROUTES.roomsRoute}/${room.id}`)}>
                {room.name}
                <FiEdit />
              </ActionButton>
            </div>
          )
        })
      }
    </div>
  );
};

export default RoomsPage;
