import { makeApiRequest } from 'utils/api';
import { ApiMethod, ApiRoute } from 'enums';
import { AxiosError } from 'axios';

const ROUTE = ApiRoute.users;

const post = async (id: string, googleUser: GoogleUser): Promise<User> => {
  const { email, firstName, lastName, picture, updatedAt } = googleUser;
  const body = { id, avatar: picture, email, firstName, lastName, points: 0, updatedAt };

  try {
    return makeApiRequest(ROUTE, { method: ApiMethod.post, body });
  } catch (error) {
    throw error;
  }
};

const patch = async (id: string, googleUser: GoogleUser): Promise<User> => {
  const { firstName, lastName, picture, updatedAt } = googleUser;
  const body = { avatar: picture, firstName, lastName, updatedAt };

  try {
    return makeApiRequest(ROUTE, { method: ApiMethod.patch, body });
  } catch (error) {
    throw error;
  }
};

const get = async (
  googleUser: GoogleUser
): Promise<User> => {
  const { firstName, lastName, sub, updatedAt } = googleUser;

  if ([firstName, lastName, sub, updatedAt].some(it => !it)) {
    throw new Error('Google user missing required fields');
  }

  const id = sub!!.split('|')[1];

  try {
    const userById = await makeApiRequest(ROUTE, { method: ApiMethod.get, id });
    return (userById.updatedAt < updatedAt!!) ? await patch(id, googleUser) : userById;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    switch (axiosError.response?.status) {
      case 404:
        return await post(id, googleUser);
      default:
        throw error;
    }
  }
};

export {
  get,
};
