import { token } from "morgan";
import OtpGen from "../Otp";
import User from "../../../db/models/User";
import Token from "../Token";


export default class MobileAuth{


    public async authenticate(obj : {number : string, otp : string}){
        let {number, otp} = obj
        let user = await User.findOne({number})
        let otpVerify = await new OtpGen().verify(user.id, otp)
        if(otpVerify){
            let token = new Token().gen(user.email, user.password) // generating token
            return {status : 200, msg : "success", token, user : {id : user.id, name : user.name, email : user.email} } // giving the whole user obj but should be changed to only important info like not giving the password salt    
        }
        else return {status : 404, msg : "Otp Verificaion failed"}
    }

}