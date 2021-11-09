const User = require('../models/users');
const passport = require('passport');
const confirmationHash = require('../models/confirmation-hash');
const nodemailer = require('nodemailer')
const config = require('../config')


function sendConfirmationEmail({ toUser, hash }, callback) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.GOOGLE_USER,
      pass: config.GOOGLE_PASSWORD
    }
  })
  const message = {
    from: config.GOOGLE_USER,
    to: config.GOOGLE_USER,
    subject: 'Event-buddy - Activate Account',
    html: `
    <h3> Hello ${toUser.name} </h3>
    <p>Thank you for registering into Event-Buddy. Much Appreciated! Just one last step is laying ahead of you...</p>
    <p>To activate your account please follow this link: <a target="_" href="${config.DOMAIN}/users/${hash}/activate">${config.DOMAIN}/activate </a></p>
    <p>Cheers</p>
    <p>Your Vue Meetuper Team</p>
    `
  }
  transporter.sendMail(message, function (err, info) {
    if (err) {
      callback(err, null)
    } else { callback(null, info) }
  })
}

exports.activateUser = function (req, res) {
  const { hash } = req.params

  confirmationHash
    .findById(hash)
    .populate('user')
    .exec((errors, foundHash) => {
      if (errors) {
        return res.status(422).send({ errors });
      }
      User.findByIdAndUpdate(foundHash.user.id, { $set: { active: true } }, { new: true }, (errors, updatedUser) => {
        if (errors) { return res.status(422).send({ errors }); }

        return res.json(updatedUser);
      })
    })
}

exports.getUsers = function (req, res) {
  User.find({})
    .exec((errors, users) => {

      if (errors) {
        return res.status(422).send({ errors });
      }

      return res.json(users);
    });
}

exports.getCurrentUser = function (req, res, next) {
  const user = req.user;

  if (!user) {
    return res.sendStatus(422);
  }
  return res.json(user.toAuthJSON());
};

exports.register = function (req, res) {
  const registerData = req.body

  if (!registerData.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
        message: 'Email is required'
      }
    })
  }

  if (!registerData.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
        message: 'Password is required'
      }
    })
  }

  if (registerData.password !== registerData.passwordConfirmation) {
    return res.status(422).json({
      errors: {
        password: 'is not the same as confirmation password',
        message: 'Password is not the same as confirmation password'
      }
    })
  }

  const user = new User(registerData);

  return user.save((errors, savedUser) => {
    if (errors) { return res.status(422).json({ errors }) }
    const hash = new confirmationHash({ user: savedUser });

    hash.save((errors, createdHash) => {
      if (errors) { return res.status(422).json({ errors }) }

      sendConfirmationEmail({ toUser: savedUser, hash: hash.id }, (errors, info) => {
        if (errors) { return res.status(422).json({ errors }) }

        return res.json(savedUser)
      })
    })

  })
}

exports.login = function (req, res, next) {
  const { email, password } = req.body

  if (!email) {
    return res.status(401).json({
      errors: {
        email: 'is required',
        message: 'Email is required'
      }
    })
  }
  if (!password) {
    return res.status(4).json({
      errors: {
        password: 'is required',
        message: 'Password is required'
      }
    })
  }
  return passport.authenticate('local', (err, passportUser) => {
    if (err) {
      return next(err)
    }
    if (passportUser) {
      if (passportUser.active) {
        return res.json({ ...passportUser._doc, token: passportUser.toAuthJSON().token })
      } else {
        return res.status(422).send({
          errors: {
            'message': 'please check your email to activate'
          }
        })
      }



    } else {
      return res.status(422).send({
        errors: {
          'message': 'Invalid password or email'
        }
      })
    }
  })

    (req, res, next)
}

exports.logout = function (req, res) {
  req.logout()
  return res.json({
    status: 'session desttroy'
  })
}
