import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useContext, useEffect } from 'react';

import { useUser } from './user';

interface AuthContextProps {
  isAuthenticated: boolean,
  logout: () => void
};

const AuthContext = createContext<undefined | AuthContextProps>(undefined);

const AuthProvider = (props: object) => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout: auth0Logout,
  } = useAuth0();
  const { user } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      localStorage.clear();
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  const logout = () => {
    auth0Logout();
    localStorage.clear();
  };

  const value = {
    isAuthenticated: isAuthenticated && !!user,
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
