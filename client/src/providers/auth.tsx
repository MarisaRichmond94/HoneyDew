import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useContext, useEffect, useState } from 'react';

import * as UsersApi from 'api/users';

interface AuthContextProps {
  isAuthenticated: boolean,
  user?: User,
  logout: () => void
};

const AuthContext = createContext<undefined | AuthContextProps>(undefined);

const AuthProvider = (props: object) => {
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

  return <AuthContext.Provider value={value} {...props} />;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth should only be used within the AuthProvider.');
  }
  return context;
};

export {
  AuthProvider,
  useAuth,
};
