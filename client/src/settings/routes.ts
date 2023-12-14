const ROUTES = {
  dailyDewsRoute: '/daily-dews',
  manageRoute: '/manage',
  planRoute: '/plan',
  progressRoute: '/progress',
  profileRoute: '/profile',
  rootRoute: '/daily-dews',
};

const MANAGE_SUB_ROUTES = {
  dewsRoute: '/manage/dews',
  roomsRoute: '/manage/rooms',
};

const DEW_SUB_ROUTES = {
  byIdRoute: '/manage/dews/:id',
  newRoute: '/manage/dews/new',
};

const ROOM_SUB_ROUTES = {
  byIdRoute: '/manage/rooms/:id',
  newRoute: '/manage/rooms/new',
};

export {
  DEW_SUB_ROUTES,
  MANAGE_SUB_ROUTES,
  ROOM_SUB_ROUTES,
  ROUTES,
};
