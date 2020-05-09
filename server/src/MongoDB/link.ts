/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-09 16:43:40
 */
export default () => {
    const mongoose = require("mongoose");

    const URL = "mongodb://rainbook:<rain1admin>@192.168.70.129:27017/bookmarks";

    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", function () {
        console.log('MongoDB 数据库链接成功')
    });

    /*
     * 连接异常 error 数据库连接错误
     */
    mongoose.connection.on("error", function (err) {
        console.log("Mongoose connection error: " + err);
    });

    /*
     * 连接断开 disconnected 连接异常断开
     */
    mongoose.connection.on("disconnected", function () {
        console.log("Mongoose connection disconnected");
    });
};
