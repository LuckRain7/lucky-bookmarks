/*
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-09 21:02:30
 */
import { Router } from 'express'
import { CategoryController } from '../controllers/adminController'
import BookmarksController from '../controllers/BookmarksController'

const router = Router()

router.route('/category')
    .get(CategoryController.get)
    .post(CategoryController.post)
    .put(CategoryController.put)

router.route('/category/:id').delete(CategoryController.delete)

// 书签
router.route('/bookmarks')
    .post(BookmarksController.post)
    .put(BookmarksController.put)

router.route('/bookmarks/:category')
    .delete(BookmarksController.delete)
    .get(BookmarksController.find)




export default router