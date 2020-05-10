/*
 *  Description: 获取类型接口
 *  Author: LuckRain7
 *  Date: 2020-05-10 11:18:46
 */
import axios from "axios";
import URL from "../url"; // 引入url

// 对类型数据进行处理

const formatCategoryData = function(data) {
  let formatData = [];
  data.forEach((item) => {
    if (item.parent) {
      // 子类型
      formatData.forEach((parData) => [
        parData.id === item.parent && parData.children.push(item),
      ]);
    } else {
      // 父类型
      formatData.push({
        ...item,
        children: [],
      });
    }
  });
  return formatData;
};

// 获取类型接口
const getData = function() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL().categoryUrl)
      .then(({ data }) => {
        data.code !== 0 && reject("数据获取错误");
        resolve(formatCategoryData(data.data));
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

const a = 10;

export default { getData, a };
