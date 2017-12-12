import express from 'express'

import {
  getFlavors,
  getFlavorById,
  getRantsByFlavorId
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getFlavors()
    .then(flavors => res.render('flavors/index', {flavors}))
    .catch(next)
})

router.get('/:flavorId', (req, res, next) => {
  let ratings = [] // TODO: fixme
  getFlavorById(req.params.flavorId)
    .then(flavor => res.render('flavors/flavor', {flavor, ratings}))
    .catch(next)
})

export default router
