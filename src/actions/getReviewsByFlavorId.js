import db from '../db'

export default function getReviewsByFlavorId(flavorId) {
  return db.query('SELECT * from reviews where flavor_id = $1', [flavorId]);
}
