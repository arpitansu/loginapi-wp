import Password from "../Password";
import User from "../../../db/models/User";
import Token from "../Token";   

export default class EmailAuth{

    public async authenticate(obj : {email : string, password : string}){
        let {email, password} = obj
        let pass = new Password()
        let user = await this.getUser(email)
        let compare = await pass.compare(user.password, password)
        let token = new Token().gen(user.email, user.password) // generating token
        if(compare) return {status : 200, msg : "success", token, user : {id : user.id, name : user.name, email : user.email}} // giving the whole user obj but should be changed to only important info like not giving the password salt
        else return {status : 404, msg : "failed"}
    }

    private getUser(email){
        return User.findOne({email})
        .then(result => result)
        .catch(err => err)
    }

    // public async verify(token){
    //     let tkn = new Token().decode(token)
    //     let pass = new Password()
    //     let user = await this.getUser(tkn.email)
    //     let compare = await pass.compare(user.password, tkn.password)
    //     if(compare) return {status : 200, msg : "Authentic user"}
    //     else return {status : 404, msg : "User not authentic"}
    // }

}