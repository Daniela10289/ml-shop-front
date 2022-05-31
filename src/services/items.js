import axios from "axios";
import config from "../config";

export const getItems = (search) => {
    return axios
      .get(`${config.baseHost}?search=${search}`)
      .then((res) => {
        console.log(res);
        return res.data
      })
      .catch((error) => {
        console.log("error!!! " + error);
        return []
      });
  };

export const getItemDetail = (id) => {
return axios
    .get(`${config.baseHost}/${id}`)
    .then((res) => {
    console.log(res);
    return res.data;
    })
    .catch((error) => {
    console.log("error!!! " + error);
    return [];
    });
};