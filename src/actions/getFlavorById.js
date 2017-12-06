import db from '../db'

export default function getFlavorById(flavorId) {
  return db.one('SELECT * FROM flavors WHERE id = $1', [flavorId])
}
