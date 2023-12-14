import './router.scss';

import { FC, useEffect } from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';

import { DEW_SUB_ROUTES, MANAGE_SUB_ROUTES, ROOM_SUB_ROUTES, ROUTES } from 'settings';
import DailyDewsPage from 'routes/dew';
import DewsPage from 'routes/manage/dews';
import ManagePage from 'routes/manage';
import PlanPage from 'routes/plan';
import ProfilePage from 'routes/profile';
import ProgressPage from 'routes/progress';
import RoomsPage from 'routes/manage/rooms';

const DAILY_DEWS_ROUTE = {
  path: ROUTES.dailyDewsRoute,
  element: <DailyDewsPage />,
};

// Management Routes
const MANAGE_ROUTE = {
  path: ROUTES.manageRoute,
  element: <ManagePage />,
};

const ROOMS_ROUTE = {
  path: MANAGE_SUB_ROUTES.roomsRoute,
  element: <RoomsPage />,
};

const ROOM_BY_ID_ROUTE = {
  path: ROOM_SUB_ROUTES.byIdRoute,
  element: <div>Room By Id</div>,
};

const NEW_ROOM_ROUTE = {
  path: ROOM_SUB_ROUTES.newRoute,
  element: <div>New Room</div>,
};

const MANAGE_DEWS_ROUTE = {
  path: MANAGE_SUB_ROUTES.dewsRoute,
  element: <DewsPage />,
};

const DEW_BY_ID_ROUTE = {
  path: DEW_SUB_ROUTES.byIdRoute,
  element: <div>Dew By Id</div>,
};

const NEW_DEW_ROUTE = {
  path: DEW_SUB_ROUTES.newRoute,
  element: <div>Create Dew</div>,
};
// End Management Routes

const PLAN_ROUTE = {
  path: ROUTES.planRoute,
  element: <PlanPage />,
};

const PROFILE_ROUTE = {
  path: ROUTES.profileRoute,
  element: <ProfilePage />,
};

const PROGRESS_ROUTE = {
  path: ROUTES.progressRoute,
  element: <ProgressPage />,
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
    DEW_BY_ID_ROUTE,
    MANAGE_DEWS_ROUTE,
    MANAGE_ROUTE,
    NEW_DEW_ROUTE,
    NEW_ROOM_ROUTE,
    PLAN_ROUTE,
    PROFILE_ROUTE,
    PROGRESS_ROUTE,
    ROOM_BY_ID_ROUTE,
    ROOMS_ROUTE,
  ]);

  return (
    <div id='content-container'>
      {routing}
    </div>
  );
};

export default Router;
