import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useContext, useEffect, useState } from 'react';

import * as UsersApi from 'api/users';

interface AuthContextProps {
  user?: User,
  logout: () => void
};

const AuthContext = createContext<undefined | AuthContextProps>(undefined);

const AuthProvider = (props: object) => {
  const {
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
    const refreshUser = async (googleUser: GoogleUser) => {
      const refreshedUser = await UsersApi.get(googleUser);
      setUser(refreshedUser);
    };

    if (!!googleUser && googleUser.email) {
      const {
        email,
        given_name: firstName,
        family_name: lastName,
        picture,
        sub,
        updated_at: updatedAt,
      } = googleUser;
      refreshUser({ email, firstName, lastName, picture, sub, updatedAt });
    }
  }, [googleUser]);

  const logout = () => {
    auth0Logout();
    localStorage.clear();
  };

  const value = {
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
