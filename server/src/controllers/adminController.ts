/*
 * @Description: 用户登录后接口
 * @Author: LuckRain7
 * @Date: 2020-05-09 21:05:30
 */
import { Request, Response } from "express";
import Category from '../MongoDB/models/Category'

class adminController {
    static get = async (req: Request, res: Response) => {
        console.log('get');
        res.send('category')

    }
}

const initData = [
    { name: 'Vue Router', id: '1.1', parent: '1' },
    { name: 'Vuex', id: '1.2', parent: '1' },
    { name: 'Vue Cli', id: '1.3', parent: '1' },
]

class CategoryController {
    static get = async (req: Request, res: Response) => {
        Category.find({}, (err, data) => {
            if (err) {
                res.send(err)
            }
            res.send({
                code: 0,
                data: data
            })
        })
    }
    static init = async (req: Request, res: Response) => {
        Category.collection.insert(initData, (err, allInfo) => {
            if (err) {
                res.send(err)
            }
            res.send(allInfo)
        })
    }

    static getById = async (req: Request, res: Response) => {
        Category.findById(req.params.id, (err, userInfo) => {
            if (err) {
                res.send(err)
            }
            res.send(userInfo)
        })
    }

    static post = async (req: Request, res: Response) => {
        Category.create(req.body, (err, info) => {
            if (err) {
                res.send(err)
            }
            res.send(info)
        })
    }

    static put = async (req: Request, res: Response) => {
        const body = req.body
        Category.findOneAndUpdate({ _id: body._id }, body, (err, userInfo) => {
            if (err) {
                res.send({ code: 1, err })
            }
            res.send({ code: 0 })
        })
    }

    static delete = async (req: Request, res: Response) => {
        Category.remove({ _id: req.params.id }, (err) => {
            if (err) {
                res.send({ code: 1, err })
            }
            res.send({ code: 0 })
        })
    }
}

export { adminController, CategoryController } 