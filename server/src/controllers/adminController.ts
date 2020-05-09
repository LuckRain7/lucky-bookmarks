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

const initData = [{ name: '前端', id: '1' },
{ name: 'Vue', id: '2' },
{ name: 'React', id: '3' },
{ name: 'WebGIS', id: '4' }
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

        console.log(req.body);
        res.send(req.body)

        // Category.create(req.body, (err, info) => {
        //     if (err) {
        //         res.send(err)
        //     }
        //     res.send(info)
        // })
    }

    static put = async (req: Request, res: Response) => {
        console.log('get');
        res.send('category')
    }

    static delete = async (req: Request, res: Response) => {
        console.log('get');
        res.send('category')
    }
}

export { adminController, CategoryController } 