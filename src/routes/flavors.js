import express from 'express'

import {
  getFlavors,
  getFlavorById,
  getReviewsByFlavorId
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getFlavors()
    .then(flavors => res.render('flavors/index', {flavors}))
    .catch(next)
})

router.get('/:flavorId', (req, res, next) => {
  let reviews = [] // TODO: get and render reviews
  getFlavorById(req.params.flavorId)
    .then(flavor => res.render('flavors/flavor', {flavor, reviews}))
    .catch(next)
})

// TODO: add routes here

export default router
