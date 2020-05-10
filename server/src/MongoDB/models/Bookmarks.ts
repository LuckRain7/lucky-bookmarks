/*
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-10 14:46:51
 */


import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, }, // 标题
    url: { type: String }, // 链接地址
    newDate: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
});

const Bookmark = mongoose.model('Bookmark', schema, 'Bookmark')

export default Bookmark