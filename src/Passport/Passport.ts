import { Config } from "../bin/Config";
import User from "../db/models/User";


var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function(passport) {
  let opts = {} as any;

  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
  opts.secretOrKey = Config.secretKey;

  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

    User.findOne({email : jwt_payload.email, password : jwt_payload.password})
    .then(user => {
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      }) 
     
  }));
};