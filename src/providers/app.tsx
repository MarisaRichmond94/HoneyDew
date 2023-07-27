import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useContext, useEffect, useState } from 'react';

interface AppContextProps {
  user?: User,
  logout: () => void
};

const AppContext = createContext<undefined | AppContextProps>(undefined);

const AppProvider = (props: object) => {
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
    if (!!googleUser) {
      console.log({ googleUser });
    }
  }, [googleUser]);

  const logout = () => {
    auth0Logout();
    localStorage.clear();
  };

  const value = {
    user,
    logout
  }

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
