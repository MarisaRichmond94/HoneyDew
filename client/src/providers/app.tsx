import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useContext, useEffect, useState } from 'react';

import * as UsersApi from 'api/users';

interface AppContextProps {
  isAuthenticated: boolean,
  user?: User,
  logout: () => void
};

const AppContext = createContext<undefined | AppContextProps>(undefined);

const AppProvider = (props: object) => {
  const {
    getAccessTokenSilently,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout: auth0Logout,
    user: googleUser,
  } = useAuth0();

  const [user, setUser] = useState<undefined | User>();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      localStorage.clear();
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

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

  const logout = () => {
    auth0Logout();
    localStorage.clear();
  };

  const value = {
    isAuthenticated: isAuthenticated && !!user,
    user,
    logout
  };

  return <AppContext.Provider value={value} {...props} />;
};

const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp should only be used within the AppProvider.');
  }
  return context;
};

export {
  AppProvider,
  useApp,
};
