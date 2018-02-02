import express from 'express'

import {
  getFlavors,
  getFlavorById,
  getReviewsByFlavorId,
  addReview
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getFlavors()
    .then(flavors => res.render('flavors/index', {flavors}))
    .catch(next)
})

router.get('/:flavorId', (req, res, next) => {
  const {flavorId} = req.params

  getFlavorById(req.params.flavorId)
    .then((flavor) => {
      getReviewsByFlavorId(flavorId)
        .then((reviews) => {
          res.render('flavors/flavor', {flavor, reviews})
        })
    })
    .catch(next)
})

// TODO: add routes here

export default router
