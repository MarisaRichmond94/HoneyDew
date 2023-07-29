import { FC } from 'react';

import { Loading } from 'components';
import { useAuth } from 'providers';

const App: FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Loading />;

  return <div id='app-content'></div>;
};

export default App;
