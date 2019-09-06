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
