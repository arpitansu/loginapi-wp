import Otp, { OtpStatus } from "../../db/models/Otp";



export default class OtpGen{


    gen(userId){
        let otp = new Otp({
            userId : userId,
            otp : this.getOtp()
        })

        return otp.save()
        .then(result => result)
        .catch(error => error)
    }

    verify(userId, otp){
        return Otp.findOne({
            userId : userId,
            otp : otp,
            status : OtpStatus.pending
        })
        .then(async result => {
            // console.log(result)
            if(result){
                await Otp.update({ _id: result.id }, { status: OtpStatus.verified })
                return true
            }
            else return false
        })
    }

    private getOtp(){
        var val = Math.floor(1000 + Math.random() * 9000);
        return val  
    }

}