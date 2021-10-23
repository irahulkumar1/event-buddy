const Thread = require('../models/threads');

exports.getThreads = function (req, res) {
  const eventId = req.query.eventId;

  Thread.find({})
    .where({ 'event': eventId })
    .populate({
      path: 'posts',
      options: { limit: 5, sort: { 'createdAt': -1 } },
      populate: { path: 'user' }
    })
    .exec((errors, threads) => {

      if (errors) {
        return res.status(422).send({ errors });
      }

      return res.json(threads);
    });
}
