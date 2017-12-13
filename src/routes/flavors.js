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
  let reviews = [] // TODO: fixme
  getFlavorById(req.params.flavorId)
    .then(flavor => res.render('flavors/flavor', {flavor, reviews}))
    .catch(next)
})

export default router
