
import crypto from 'crypto'

export function encrypt(text:string){
  return crypto
    .createHash('sha256')
    .update(text)
    .digest('hex')
}
