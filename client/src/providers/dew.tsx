import { FC, PropsWithChildren, createContext, useContext } from 'react';

interface DewContextProps {
  dews?: Dew[],
};

const DewContext = createContext<undefined | DewContextProps>(undefined);

interface DewProviderProps extends PropsWithChildren {
  dews?: Dew[],
};

const DewProvider: FC<DewProviderProps> = ({ children, dews }) => {
  const value = {
    dews,
  };

  return (
    <DewContext.Provider value={value}>
      {children}
    </DewContext.Provider>
  );
};

const useDew = () => {
  const context = useContext(DewContext);
  if (context === undefined) {
    throw new Error('useDew should only be used within the DewProvider.');
  }
  return context;
};

export {
  DewProvider,
  useDew,
};
