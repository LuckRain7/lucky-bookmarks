/*
 * @Description: 分类 数据模型
 * @Author: LuckRain7
 * @Date: 2020-05-09 20:40:21
 */
import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, },
    id: { type: String },
    parent: { type: String },
});

const Category = mongoose.model('Category', schema, 'Category')

export default Category