import db from '../db'

export default function signUp(user) {
  return db.one('INSERT into users (username, email, password) VALUES (${username},  ${email}, ${password} ) RETURNING *', user);
}
