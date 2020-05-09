/*
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-04-28 18:58:06
 */

import { Router } from "express";
import home from './home'
import user from './user'
import admin from './admin'

const homeRoutes = Router();
const userRoutes = Router();
const adminRoutes = Router();

userRoutes.use('/user', user)
homeRoutes.use('/', home)
adminRoutes.use('/api/admin', admin)

export default {
    homeRoutes,
    userRoutes,
    adminRoutes
}