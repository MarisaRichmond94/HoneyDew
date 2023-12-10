import { makeApiRequest } from 'utils/api';
import { ApiMethod, ApiRoute } from 'enums';

const ROUTE = ApiRoute.schedule;

const updateSchedule = async (
  id: string,
  body: UpdateScheduleDto,
  getAccessTokenSilently: (options?: any) => Promise<string>,
  onUpdateCallback?: (daySchedule: DaySchedule) => void,
): Promise<DaySchedule> => {
  const daySchedule = await makeApiRequest(
    getAccessTokenSilently,
    ROUTE,
    { method: ApiMethod.patch, id, body },
  );
  if (onUpdateCallback) onUpdateCallback(daySchedule);

  return daySchedule;
};

export {
  updateSchedule,
};
