/*
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-10 14:51:43
 */

import { Request, Response } from "express";
import Bookmarks from '../MongoDB/models/Bookmarks'





class BookmarksController {
    static get = async (req: Request, res: Response) => {
        Bookmarks.find({}, (err, data) => {
            if (err) {
                res.send(err)
            }
            res.send({
                code: 0,
                data: data
            })
        })
    }

    static find = async (req: Request, res: Response) => {
        Bookmarks.find({ category: req.params.category }, (err, data) => {
            if (err) {
                res.send(err)
            }
            res.send(data)
        })
    }

    static post = async (req: Request, res: Response) => {
        Bookmarks.create(req.body, (err, data) => {
            if (err) {
                res.send({ code: 1, err })
            }
            res.send({ code: 0 })
        })
    }

    static put = async (req: Request, res: Response) => {
        const body = req.body
        Bookmarks.findOneAndUpdate({ _id: body._id }, body, (err, userInfo) => {
            if (err) {
                res.send({ code: 1, err })
            }
            res.send({ code: 0 })
        })
    }

    static delete = async (req: Request, res: Response) => {
        Bookmarks.remove({ _id: req.params.id }, (err) => {
            if (err) {
                res.send({ code: 1, err })
            }
            res.send({ code: 0 })
        })
    }
}

export default BookmarksController 