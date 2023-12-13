import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useContext, useEffect, useState } from 'react';

import * as ScheduleApi from 'api/schedule';
import * as UsersApi from 'api/users';
import { Day } from 'enums';

interface UserContextProps {
  assignedChores?: AssignedChore[],
  dailyChores?: DailyChore[],
  isScheduleLoaded: boolean,
  rooms?: Room[],
  schedule?: Schedule,
  user?: User,

  updateSchedule: (day: Day, id: string, body: UpdateScheduleDto) => void,
};

const UserContext = createContext<undefined | UserContextProps>(undefined);

const UserProvider = (props: object) => {
  const {
    getAccessTokenSilently,
    user: googleUser,
  } = useAuth0();

  const [assignedChores, setAssignedChores] = useState<undefined | AssignedChore[]>();
  const [dailyChores, setDailyChores] = useState<undefined | DailyChore[]>();
  const [rooms, setRooms] = useState<undefined | Room[]>();
  const [schedule, setSchedule] = useState<undefined | Schedule>();
  const [user, setUser] = useState<undefined | User>();

  useEffect(() => {
    const refreshUser = async (userDto: FindOrCreateUserDTO) => {
      const refreshedUser = await UsersApi.findOrCreate(userDto, getAccessTokenSilently);
      // Fake latency so we can see our beautiful loading spinner
      setTimeout(() => {
        setUser(refreshedUser);
        setAssignedChores(refreshedUser.assignedChores);
        setDailyChores(refreshedUser.dailyChores);
        setRooms(refreshedUser.rooms);
        setSchedule(refreshedUser.schedule);
      }, 2000);
    };

    if (
      !!googleUser &&
      googleUser.email &&
      googleUser.given_name &&
      googleUser.family_name &&
      googleUser.picture &&
      googleUser.sub
    ) {
      const {
        email,
        given_name: firstName,
        family_name: lastName,
        picture: avatar,
        sub: googleId,
      } = googleUser;
      refreshUser({ email, firstName, lastName, avatar, googleId });
    }
  }, [getAccessTokenSilently, googleUser]);

  const updateSchedule = async (day: Day, id: string, body: UpdateScheduleDto) => {
    const daySchedule = await ScheduleApi.updateSchedule(id, body, getAccessTokenSilently);
    const scheduleCopy = { ...schedule };
    scheduleCopy[day] = daySchedule;
    setSchedule(scheduleCopy as Schedule);
  };

  const value = {
    assignedChores,
    dailyChores,
    isScheduleLoaded: !!schedule,
    rooms,
    schedule,
    user,

    updateSchedule,
  };

  return <UserContext.Provider value={value} {...props} />;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser should only be used within the UserProvider.');
  }
  return context;
};

export {
  UserProvider,
  useUser,
};
