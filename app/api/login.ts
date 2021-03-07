/**
 * Perform login request to the server.
 */
import { requests } from "../utilities/requests";
import { apiUrls } from "../urls";
import Cookies from "js-cookie";
import { AUTH_TOKEN_NAME } from "../../settings";

interface LoginResponse {
  token: string;
}

const login = (data: object) => {
  return requests.post(apiUrls.login, data).then(({ token }: LoginResponse) => {
    Cookies.set(AUTH_TOKEN_NAME, token);
  });
};

const validateLoginForm = async (data: object) => {
  let errors = {};

  if (Object.keys(errors).length > 0) {
    return Promise.reject(errors);
  }
  return data;
};

export { login, validateLoginForm };
