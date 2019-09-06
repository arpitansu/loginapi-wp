var bcrypt = require('bcryptjs');


export default class Password{


    getHash(password : string){
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, function(err, hash){
                    if(err) reject(err);
                    resolve(hash)
                });
            });
        })
    }

    compare(hash, password){
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, function(err, result) {
               if(err) reject(err)
               else resolve(result)
            });
        })   
    }

}