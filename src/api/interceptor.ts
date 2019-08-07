import { instance } from "./axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";
interface AxiosRequestConfigFunction {
  (value: AxiosRequestConfig): AxiosRequestConfig;
}

instance.interceptors.request.use(config => {
  if (localStorage.getItem("token")) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return config;
});

instance.interceptors.response.use(
  config => {
    // console.log(config);
    return config.data;
  },
  error => {
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

function setRequestInterceptor(configFunction: AxiosRequestConfigFunction) {
  instance.interceptors.request.use(configFunction);
}

export { instance, setRequestInterceptor };
