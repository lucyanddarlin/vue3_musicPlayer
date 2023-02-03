import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosPromise,
  AxiosInterceptorManager,
  Method,
} from "axios";
import qs from "qs";
import type { apiKeyTypes, apiKeyDataType } from "@/utils/api";

type ResultDataType = apiKeyDataType[apiKeyTypes];

interface newAxiosInstance extends AxiosInstance {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<ResultDataType>>;
  };
}

let http: newAxiosInstance = axios.create({
  baseURL: "https://music.wanjiacloud.top",
  timeout: 3 * 1000,
  withCredentials: true,
});

http.defaults.withCredentials = true;

const QS_METHOD: Method[] = ["POST", "post", "PUT", "put"];
const GET_METHOD: Method[] = ["GET", "get", "DELETE", "delete"];

// 请求拦截器
http.interceptors.request.use(
  (request) => {
    request.params = { ...request.params, t: Date.now() };
    if (request.method && QS_METHOD.includes(<Method>request.method)) {
      request.data = qs.stringify(request.data);
    } else if (request.method && GET_METHOD.includes(<Method>request.method)) {
      request.params = Object.assign(
        {},
        { t: Date.now() },
        qs.parse(request.data)
      );
      request.data = undefined;
    }
    return request;
  },
  (error) => {
    return error;
  }
);

http.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return error;
  }
);

export default http;
