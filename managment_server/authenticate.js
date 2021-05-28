var JWTStrategy= require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
const passport=require('passport');
const moongose=require('mongoose');

const Users=require('./models/User');
const config =require('./config');

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretOrKey;


exports.jwtPassport = passport.use(new JWTStrategy(opts,
    (jwt_payload, done) => {
        console.log("JWT payload: ", jwt_payload);
        Users.findOne({_id: jwt_payload._id}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            else if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));

exports.verifyUser=passport.authenticate('jwt',{session:false});