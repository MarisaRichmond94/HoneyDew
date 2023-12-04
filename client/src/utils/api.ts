import axios, { AxiosError, AxiosResponse } from 'axios';

import auth0Config from 'config/auth0.json';
import { ApiMethod, ApiRoute } from 'enums';

interface Headers {
  headers: ApiHeaders
}

const buildHeaders = (accessToken?: string): Headers =>
  ({
    headers: {
      Authorization: `Bearer ${accessToken}`,
      userId: window.localStorage.getItem('userId')
    }
  });

interface ApiRequestOptions {
  method: ApiMethod,
  id?: string,
  body?: { [key: string]: any },
  query?: { [key: string]: any },
};

const buildQueryString = (query: { [key: string]: any }): string => {
  const queryString = Object.keys(query).reduce((accumulation, key) => {
    return accumulation + `${key}=${encodeURIComponent(query[key])}&`;
  }, '');

  return (queryString.endsWith('&')) ? queryString.slice(0, -1) : queryString;
};

const buildUrl = (route: ApiRoute, id?: string, query?: { [key: string]: any }): string => {
  let baseUrl = `${process.env.REACT_APP_BASE_SERVER_URL}/api/private/${route}`;
  if (id) baseUrl = `${baseUrl}/${id}`;
  if (query) baseUrl = `${baseUrl}?${buildQueryString(query)}`;

  return baseUrl;
};

const makeRequest = async (
  url: string,
  method: ApiMethod,
  headers?: { [key: string]: any },
  body?: { [key: string]: any },
): Promise<AxiosResponse> => {
  switch (method) {
    case ApiMethod.post:
      return axios.post(url, body, headers);
    case ApiMethod.patch:
      return axios.patch(url, body, headers);
    case ApiMethod.delete:
    case ApiMethod.deleteById:
      return axios.delete(url, headers);
    case ApiMethod.get:
    case ApiMethod.getById:
    default:
      return axios.get(url, headers);
  }
};

const isAxiosError = (error: any): error is AxiosError => error.isAxiosError === true;

const makeApiRequest = async (
  getAccessTokenSilently: (options?: TokenRequestProps) => Promise<string>,
  route: ApiRoute,
  options: ApiRequestOptions,
) => {
  const { method, id, body, query } = options;

  try {
    const headers = buildHeaders(
      await getAccessTokenSilently({
        audience: auth0Config.audience,
        scope: 'read:current_user',
      })
    );
    const response = await makeRequest(buildUrl(route, id, query), method, headers, body);
    if (route === ApiRoute.users) window.localStorage.setItem('userId', response?.data?.id);
    return response?.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) throw error;
    console.log(error);
  }
};

export {
  buildHeaders,
  buildUrl,
  makeApiRequest,
  makeRequest,
};
