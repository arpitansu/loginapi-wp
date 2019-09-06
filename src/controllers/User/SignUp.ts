import User from "../../db/models/User"
import { resolve } from "path";
import Password from "./Password";


interface iUser {name : string, email : string, password : string}

export default class SignUp{
    private name : string
    private email : string
    private password : string
    constructor(obj : iUser){
        this.name = obj.name
        this.email = obj.email
        this.password = obj.password
    }

    async execute(){

        let hashpass = await new Password().getHash(this.password)
        
        let user = new User({
            name : this.name,
            email : this.email,
            password : hashpass
        })

        return user.save().then(result => result)
        .catch(err => err)
    }


}