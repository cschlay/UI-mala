import fetch from "isomorphic-unfetch";
import * as queryString from "querystring";
// @ts-ignore
import Cookies from "js-cookie";

interface RequestOptions {
  nextCtx?: object;
  headers?: object;
}

const getApiUrl = (url: string, params?: {}): string => {
  const paramString: string = params ? `?${queryString.stringify(params)}` : "";
  return process.env.API_HOST + url + paramString;
};

const getAuthorizationHeader = (nextCtx?: object): string => {
  // TODO: Implement nextCtx cookie extraction.
  return Cookies.get("authorization");
};

const httpGet = async (
  url: string,
  queryParams?: {},
  { nextCtx, headers, ...options }: RequestOptions = {}
): Promise<object> => {
  const apiUrl: string = getApiUrl(url, queryParams);
  console.info(`HTTP GET ${apiUrl}`);
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthorizationHeader(nextCtx),
      ...headers,
    },
    ...options,
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
};

export { getApiUrl, requests };
