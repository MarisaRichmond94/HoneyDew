import { FC } from 'react';

import { Loading } from 'components';
import { useApp } from 'providers';
import { Footer, Header, Router } from 'routes';

const App: FC = () => {
  const { isAuthenticated } = useApp();

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
