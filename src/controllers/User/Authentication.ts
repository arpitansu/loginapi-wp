import User from "../../db/models/User"
import Password from "./Password";
import EmailAuth from "./Auths/Email.auth";


export default class Authentication{

    public get(type : string){
        //always returning email for local strategy later google fb can be added
        if(type == 'local') return new EmailAuth()
        return new EmailAuth() //by default returning the email auth but later can be implemetes other auths too
    }

}


class Email{

    public async authenticate(email : string, password : string){
        let pass = new Password()
        let user = await this.getUser(email)
        let compare = await pass.compare(user.password, password)
        if(compare) return {status : 200, msg : "success", token : "token", user} // giving the whole user obj but should be changed to only important info like not giving the password salt
        else return {status : 404, msg : "failed"}
    }

    private getUser(email){
        return User.findOne({email})
        .then(result => result)
        .catch(err => err)
    }
}

class Google{}
class Fb{}