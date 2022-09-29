import axios from "./http";
import apiList from "@/utils/api";
import type { apiKeyTypes, apiKeyDataType } from "@/utils/api";
import type { AxiosRequestConfig } from "axios";

export default <T extends apiKeyTypes>(
  obj: AxiosRequestConfig & { url: T }
) => {
  return new Promise<apiKeyDataType[T]>((resolve, reject) => {
    axios<apiKeyDataType[T]>({
      url: apiList[obj.url],
      data: obj.data || {},
      method: obj.method || "GET",
      responseType: obj.responseType || "json",
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
