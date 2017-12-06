import express from 'express'

import flavors from './flavors'
import authentication from './authentication'
import { ensureLoggedIn } from '../middlewares'


const routes = express.Router()
routes.use('/', authentication)

routes.use(ensureLoggedIn)

routes.get('/', (req, res) => res.redirect('/flavors'))
routes.use('/flavors', flavors)


export default routes
