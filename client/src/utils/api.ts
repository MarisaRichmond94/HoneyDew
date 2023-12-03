import axios, { AxiosError, AxiosResponse } from 'axios';

import { ApiMethod, ApiRoute } from 'enums';

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
  let baseUrl = `${process.env.REACT_APP_BASE_SERVER_URL}/${route}`;
  if (id) baseUrl = `${baseUrl}/${id}`;
  if (query) baseUrl = `${baseUrl}?${buildQueryString(query)}`;

  return baseUrl;
};

const makeRequest = async (
  url: string,
  method: ApiMethod,
  body?: { [key: string]: any },
): Promise<AxiosResponse> => {
  switch (method) {
    case ApiMethod.post:
      return axios.post(url, body);
    case ApiMethod.patch:
      return axios.patch(url, body);
    case ApiMethod.delete:
    case ApiMethod.deleteById:
      return axios.delete(url);
    case ApiMethod.get:
    case ApiMethod.getById:
    default:
      return axios.get(url);
  }
};

const isAxiosError = (error: any): error is AxiosError => error.isAxiosError === true;

const makeApiRequest = async (
  route: ApiRoute,
  options: ApiRequestOptions,
) => {
  const { method, id, body, query } = options;

  try {
    const response = await makeRequest(buildUrl(route, id, query), method, body);
    if (route === ApiRoute.users) window.localStorage.setItem('userId', response?.data?.id);
    return response?.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) throw error;
    console.log(error);
  }
};

export {
  buildUrl,
  makeApiRequest,
  makeRequest,
};
