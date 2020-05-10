/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-10 11:23:26
 */

const env = process.env.NODE_ENV;

const base_url =
  env === "development"
    ? "http://localhost:7778/"
    : "http:server.rain7.top:7778/";

const admin_url = "api/admin/";

const URL = function() {
  return {
    categoryUrl: base_url + admin_url + "category",
    bookmarksUrl: base_url + admin_url + "bookmarks",
  };
};

export default URL;
