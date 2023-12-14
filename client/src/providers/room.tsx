import { FC, PropsWithChildren, createContext, useContext } from 'react';

interface RoomContextProps {
  rooms?: Room[],
};

const RoomContext = createContext<undefined | RoomContextProps>(undefined);

interface RoomProviderProps extends PropsWithChildren {
  rooms?: Room[],
};

const RoomProvider: FC<RoomProviderProps> = ({ children, rooms }) => {
  const value = {
    rooms,
  };

  return (
    <RoomContext.Provider value={value}>
      {children}
    </RoomContext.Provider>
  );
};

const useRoom = () => {
  const context = useContext(RoomContext);
  if (context === undefined) {
    throw new Error('useRoom should only be used within the RoomProvider.');
  }
  return context;
};

export {
  RoomProvider,
  useRoom,
};
