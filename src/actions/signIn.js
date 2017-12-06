import db from '../db'

export default function signIn(username, password) {
  return db.oneOrNone(`SELECT * FROM users WHERE username = $1 and password = $2`,
         [username, password]);
}

