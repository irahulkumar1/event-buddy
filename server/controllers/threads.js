const Thread = require('../models/threads');

exports.getThreads = function (req, res) {
  const eventId = req.query.eventId;

  Thread.find({})
    .where({ 'event': eventId })
    .populate({
      path: 'posts',
      options: { limit: 5, sort: { 'createdAt': -1 } },
      populate: { path: 'user', model: 'User' }

    })
    .populate("user")
    .exec((errors, threads) => {

      if (errors) {
        console.log(errors.message)
        return res.status(422).send({ errors });
      }

      return res.json(threads);
    });
}

exports.createThread = function (req, res) {
  const threadData = req.body
  console.log('akjhfasdhf', threadData)
  const thread = new Thread(threadData)
  thread.user = req.user

  thread.save().then(data => {
    console.log(data)
    return res.json(data)

  }).catch(error => {
    console.log(error.message)
    return res.status(422).send({ errors })
  })



  // ((errors) => {
  //   if (errors) {
  //     console.log(errors.message)
  //     return res.status(422).send({ errors })
  //   }
  //   return res.json(createdThread)
  // })
}