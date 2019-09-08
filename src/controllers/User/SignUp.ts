import User from "../../db/models/User"
import { resolve } from "path";
import Password from "./Password";


interface iUser {name : string, email : string, password : string, number : string}

export default class SignUp{
    private name : string
    private email : string
    private password : string
    private number : string
    constructor(obj : iUser){
        this.name = obj.name
        this.email = obj.email
        this.password = obj.password
        this.number = obj.number
    }

    async execute(){

        let hashpass = await new Password().getHash(this.password)
        
        let user = new User({
            name : this.name,
            email : this.email,
            password : hashpass,
            number : this.number
        })

        return user.save().then(result => result)
        .catch(err => {throw err})
    }


}