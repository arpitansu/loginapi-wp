import jwt from 'jsonwebtoken'
import { Config } from '../../bin/Config';

export default class Token{

    private secretKey = Config.secretKey;

    gen(email, password){
        let token = jwt.sign({email, password}, this.secretKey, { expiresIn: 60 * 60 })
        return token
    }

    decode(token){
        let decoded = jwt.verify(token, this.secretKey);  
        return decoded
    }

}