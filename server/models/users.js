const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Event = require('./events');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../config')

const userSchema = new Schema({
   avatar: String,
   email: {
      type: String,
      required: 'Email is Required',
      lowercase: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
   },
   name: {
      type: String,
      required: true,
      minlength: [6, 'Too short, min is 6 characters']
   },
   username: {
      type: String,
      required: true,
      minlength: [6, 'Too short, min is 6 characters']
   },
   password: {
      type: String,
      minlength: [4, 'Too short, min is 4 characters'],
      maxlength: [32, 'Too long, max is 32 characters'],
      required: 'Password is required'
   },
   active: { type: Boolean, default: false },
   info: String,
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now },
   joinedEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
});

userSchema.pre("save", function (next) {
   const user = this;

   bcrypt.genSalt(10, function (err, salt) {
      if (err) { return next(err); }

      bcrypt.hash(user.password, salt, function (err, hash) {
         if (err) { return next(err); }

         user.password = hash;
         next();
      });
   });
});


userSchema.methods.comparePassword = function (candidatePassword, callback) {
   bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) { return callback(err); }

      callback(null, isMatch);
   });
}


userSchema.methods.generateJWT = function () {
   return jwt.sign({
      email: this.email,
      id: this._id
   }, config.JWT_SECRET, { expiresIn: '20h' })
}

userSchema.methods.toAuthJSON = function () {
   return {
      _id: this._Id,
      avatar: this.avatar,
      name: this.name,
      username: this.username,
      info: this.info,
      email: this.email,
      joinedEvents: this.joinedEvents,
      token: this.generateJWT()
   };
}

module.exports = mongoose.model('User', userSchema);
