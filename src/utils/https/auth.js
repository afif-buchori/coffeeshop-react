import axios from "axios";

import { get } from "../localStorage";
import store from "../../redux/store";

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
};

export const forgot = (email, controller) => {
  const url = `${baseUrl}/auth/forgot`;
  return axios.patch(url, { email }, { signal: controller.signal });
};

export const setPassbyForgot = (email, otpCode, password, controller) => {
  const url = `${baseUrl}/auth/editpassbyforgot`;
  const body = { email, code_otp: otpCode, password };
  return axios.patch(url, body, { signal: controller.signal });
};

export const getUser = (id, controller) => {
  const url = `${baseUrl}/users/${id}`;
  return axios.get(url, { signal: controller.signal });
};

export const updateDataUser = (body, controller) => {
  const url = `${baseUrl}/auth/profile`;
  const storeToken = store.getState();
  const token = storeToken.user.token;
  return axios.patch(url, body, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const checkToken = (controller) => {
  const url = `${baseUrl}/auth/private`;
  const token = get("coffeeShop-token");
  return axios.get(url, {
    signal: controller.signal,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
