/*
 *  Description:  
 *  Author: LuckRain7
 *  Date: 2020-05-10 11:23:26
 */
const base_url = "http://localhost:7778/";
const admin_url = "api/admin/";

const URL = function() {
  return {
    categoryUrl: base_url + admin_url + "category",
  };
};

export default URL