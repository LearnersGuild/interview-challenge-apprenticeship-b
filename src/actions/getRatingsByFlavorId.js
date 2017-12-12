import db from '../db'

export default function getRatingsByFlavorId(flavorId) {
  return db.query('SELECT * from ratings where flavor_id = $1', [flavorId]);
}
