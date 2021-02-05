import express from 'express'
import * as controller from './controller.js'
const router =  express.Router()


router.post('/api/form/signup', controller.signUp)

export default router