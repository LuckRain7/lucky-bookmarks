/*
 *  Description: 书签接口
 *  Author: LuckRain7
 *  Date: 2020-05-10 15:40:59
 */

import axios from "axios";
import URL from "../url"; // 引入url

// 获取类型接口
const getDataByCategory = function(data) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL().bookmarksUrl + "/" + data)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

const addBookmarks = function(data) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL().bookmarksUrl, data)
      .then((data) => {
        resolve(data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

const updateBookmarks = function(data) {
  return new Promise((resolve, reject) => {
    axios
      .put(URL().bookmarksUrl, data)
      .then((data) => {
        resolve(data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

const deleteBookmarks = function(data) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL().bookmarksUrl + "/" + data)
      .then((data) => {
        resolve(data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

export default {
  getDataByCategory,
  addBookmarks,
  updateBookmarks,
  deleteBookmarks,
};
