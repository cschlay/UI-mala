import fetch from "isomorphic-unfetch";

const getApiUrl = (url: string) => {
  return process.env.API_HOST + url;
};

const httpGet = (url: string, queryParams: object) => {};

const http = {
  get: httpGet,
};

export { getApiUrl, http };
