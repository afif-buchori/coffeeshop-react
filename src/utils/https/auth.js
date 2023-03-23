import axios from "axios";

// eslint-disable-next-line no-undef
const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;

export const login = (email, password, controller) => {
  const url = `${baseUrl}/auth`;
  const body = { email, password };
  return axios.post(url, body, { signal: controller.signal });
};

export const register = (email, password, phone, controller) => {
  const url = `${baseUrl}/auth/register`;
  const body = { email, password, phone };
  return axios.post(url, body, { signal: controller.signal });
}