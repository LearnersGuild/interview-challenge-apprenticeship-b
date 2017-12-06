import db from '../db'

export default function getFlavors() {
  return db.any('SELECT * FROM flavors')
}
