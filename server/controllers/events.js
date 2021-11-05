const Event = require('../models/events');

exports.getSecret = function (req, res) {
  return res.json({ secret: 'I am secret Message' })
}

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



// Create Event
exports.createEvent = function (req, res) {
  const eventData = req.body;
  const user = req.user;

  const event = new Event(eventData);
  event.user = user;
  event.status = 'active';

  event.save((error, createdEvent) => {
    if (error) {
      return res.status(422).send({ error });
    }

    return res.json(createdEvent)
  })
}