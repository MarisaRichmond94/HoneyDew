import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useContext, useEffect, useState } from 'react';

import * as UsersApi from 'api/users';

interface UserContextProps {
  user?: User,
};

const UserContext = createContext<undefined | UserContextProps>(undefined);

const UserProvider = (props: object) => {
  const {
    getAccessTokenSilently,
    user: googleUser,
  } = useAuth0();

  const [user, setUser] = useState<undefined | User>();

  useEffect(() => {
    const refreshUser = async (userDto: FindOrCreateUserDTO) => {
      const refreshedUser = await UsersApi.findOrCreate(userDto, getAccessTokenSilently, setUser);
      // Fake latency so we can see our beautiful loading spinner
      setTimeout(() => { setUser(refreshedUser); }, 2000);
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

  const value = {
    user,
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
