import fetch from "isomorphic-unfetch";
import * as queryString from "querystring";
import Cookies from "js-cookie";
import { AUTH_TOKEN_NAME } from "../../settings";

interface RequestOptions {
  nextCtx?: object;
  headers?: object;
}

const getApiUrl = (url: string, params?: {}): string => {
  const paramString: string = params ? `?${queryString.stringify(params)}` : "";
  return process.env.NEXT_PUBLIC_API_HOST + url + paramString;
};

const getHeaders = (nextCtx?: object): object => {
  const headers = {
    "Content-Type": "application/json",
  };
  const authToken = Cookies.get(AUTH_TOKEN_NAME);
  if (authToken) {
    return {
      ...headers,
      Authorization: `Bearer ${authToken}`,
    };
  }
  return headers;
};

const httpGet = async (
  url: string,
  queryParams?: {},
  { nextCtx, headers, ...options }: RequestOptions = {}
): Promise<object> => {
  const apiUrl: string = getApiUrl(url, queryParams);
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      ...getHeaders(nextCtx),
      ...headers,
    },
    ...options,
  })
    .catch(handleRequestError)
    .then(handleResponse);
};

const httpPost = async (
  url: string,
  data: object,
  { nextCtx, headers, ...options }: RequestOptions = {}
) => {
  const apiUrl: string = getApiUrl(url);
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      ...getHeaders(nextCtx),
      ...headers,
    },
    body: JSON.stringify(data),
  })
    .catch(handleRequestError)
    .then(handleResponse);
};

const handleRequestError = (error: any) => {
  console.error(
    "Bug encountered when attempting to perform GET request.",
    error
  );
  return Promise.reject({ status: -1 });
};

const handleResponse = async (response: Response): Promise<object> => {
  try {
    switch (response.status) {
      case 200:
        return await response.json();
      default:
        return Promise.reject(response);
    }
  } catch (error) {
    return handleRequestError(error);
  }
};

const requests = {
  get: httpGet,
  post: httpPost,
};

export { getApiUrl, requests };
