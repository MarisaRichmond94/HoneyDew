import './router.scss';

import { FC, useEffect } from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';

import { ROUTES } from 'settings';
import DailyDewsPage from 'routes/dew';
import ManagePage from 'routes/manage';
import PlanPage from 'routes/plan';
import ProfilePage from 'routes/profile';
import ProgressPage from 'routes/progress';

const DAILY_DEWS_ROUTE = {
  path: ROUTES.dailyDewsRoute,
  element: <DailyDewsPage />,
  children: [],
};

const MANAGE_ROUTE = {
  path: ROUTES.manageRoute,
  element: <ManagePage />,
  children: [],
};

const PLAN_ROUTE = {
  path: ROUTES.planRoute,
  element: <PlanPage />,
  children: [],
};

const PROFILE_ROUTE = {
  path: ROUTES.profileRoute,
  element: <ProfilePage />,
  children: [],
};

const PROGRESS_ROUTE = {
  path: ROUTES.progressRoute,
  element: <ProgressPage />,
  children: [],
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

  const routing = useRoutes([
    DAILY_DEWS_ROUTE,
    MANAGE_ROUTE,
    PLAN_ROUTE,
    PROFILE_ROUTE,
    PROGRESS_ROUTE,
  ]);

  return (
    <div id='content-container'>
      {routing}
    </div>
  );
};

export default Router;
