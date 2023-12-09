import { FC } from 'react';

import { Loading } from 'components';
import { useAuth } from 'providers';
import { Footer, Header, Router } from 'routes';

const App: FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Loading />;

  return (
    <div id='app-content'>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
