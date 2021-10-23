const Event = require('../models/events');

exports.getEvents = function (req, res) {
  Event.find({})
    .populate('category')
    .populate('joinedPeople')
    .exec((errors, events) => {

      if (errors) {
        return res.status(422).send({ errors });
      }

      return res.json(events);
    });
}

exports.getEventById = function (req, res) {
  const { id } = req.params;

  Event.findById(id)
    .populate('eventCreator', 'name id avatar')
    .populate('category')
    .populate({
      path: 'joinedPeople',
      options: { limit: 5, sort: { username: -1 } }
    })
    .exec((errors, event) => {
      if (errors) {
        return res.status(422).send({ errors });
      }

      return res.json(event);
    });
}
