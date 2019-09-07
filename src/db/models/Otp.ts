import mongoose from 'mongoose'

export enum OtpStatus{
    pending = 0,
    verified = 1
}

const OtpSchema = new mongoose.Schema({

    userId: { type: String, required: true },
    otp: { type: String, required: true, unique: true  },
    status: { type: Number, required: true, default : OtpStatus.pending} // 0 => pending, 1 => verified

});

var Otp = mongoose.model("Otp", OtpSchema);
export default Otp

