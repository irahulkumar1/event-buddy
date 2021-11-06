const Event = require('../models/events');
const User = require('../models/users')

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
  console.log('createEvent', eventData)
  const user = req.user;

  const event = new Event(eventData);
  event.user = user;
  event.status = 'active';

  event.save().then(data => {
    console.log(data)
    return res.json(data)
  }).catch(error => {
    console.log(error.message)
    return res.status(404).send(error)
  })


  //   if (error) {
  //     return res.status(422).send({ error });
  //   }

  //   return res.json(createdEvent)
  // })
}


// join and leave events
exports.joinEvent = function (req, res) {
  const user = req.user;
  const { id } = req.params;

  Event.findById(id, (errors, event) => {
    if (errors) {
      return res.status(422).send({ errors })
    }
    event.joinedPeople.push(user);
    event.joinedPeopleCount++;

    return Promise.all(
      [event.save(),
      User.updateOne({ _id: user.id }, { $push: { joinedEvents: event } })])
      .then(result => res.json({ id }))
      .catch(errors => res.status(422).send({ errors }))
  })
}

exports.leaveEvent = function (req, res) {
  const user = req.user;
  const { id } = req.params;

  Promise.all(
    [Event.updateOne({ _id: id }, { $pull: { joinedPeople: user.id }, $inc: { joinedPeopleCount: -1 } }),
    User.updateOne({ _id: user.id }, { $pull: { joinedEvents: id } })])
    .then(result => res.json({ id }))
    .catch(errors => res.status(422).send({ errors }))
}