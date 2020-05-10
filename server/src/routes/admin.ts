/*
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-09 21:02:30
 */
import { Router } from 'express'
import { CategoryController } from '../controllers/adminController'

const router = Router()

router.route('/category')
    .get(CategoryController.get)
    // .get(CategoryController.init)
    .post(CategoryController.post)
    .post(CategoryController.delete)
    .put(CategoryController.put)


export default router