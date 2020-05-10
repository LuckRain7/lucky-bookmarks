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
    .post(CategoryController.post)
    .put(CategoryController.put)

router.route('/category/:id').delete(CategoryController.delete)


export default router