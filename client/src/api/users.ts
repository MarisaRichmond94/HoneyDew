import { makeApiRequest } from 'utils/api';
import { ApiMethod, ApiRoute } from 'enums';

const ROUTE = ApiRoute.users;

const findOrCreate = async (
  body: FindOrCreateUserDTO,
  getAccessTokenSilently: (options?: any) => Promise<string>,
  onUpdateCallback?: (user: User) => void,
): Promise<UserDto> => {
  const user = await makeApiRequest(getAccessTokenSilently, ROUTE, { method: ApiMethod.post, body });
  if (onUpdateCallback) onUpdateCallback(user);

  return user;
};

export {
  findOrCreate,
};
