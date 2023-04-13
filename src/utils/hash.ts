import * as crypto from 'crypto'

export function hashPassword(password: string) {
   const salt = crypto.randomBytes(16).toString('hex')
   const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
   return { hash, salt }
}

export function verifyPassword({ password, hash, salt }: { password: string; hash: string; salt: string }) {
   const newHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
   return hash === newHash
}
