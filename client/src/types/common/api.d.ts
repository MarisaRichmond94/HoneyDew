import { ApiMethod } from 'enums';

declare global {
  interface TokenRequestProps {
    audience: string,
    scope: string,
  };

  interface ApiRequestOptions {
    method: ApiMethod,
    id?: string,
    body?: { [key: string]: any },
    query?: { [key: string]: any },
  };

  interface ApiHeaders {
    Authorization: string,
    userId: string?,
  };
};

export {};
