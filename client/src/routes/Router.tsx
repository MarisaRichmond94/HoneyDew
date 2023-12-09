import './router.scss';

import { FC, useEffect } from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';

import { ROUTES } from 'settings';
import DailyDewsPage from 'routes/dew';

const DAILY_DEWS_ROUTE = {
  path: ROUTES.dailyDewsRoute,
  element: <DailyDewsPage />,
  children: []
};

const Router: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== ROUTES.rootRoute) {
      return navigate(ROUTES.rootRoute);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const routing = useRoutes([DAILY_DEWS_ROUTE]);

  return (
    <div id='content-container'>
      {routing}
    </div>
  );
};

export default Router;
