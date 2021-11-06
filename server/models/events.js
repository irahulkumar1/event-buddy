const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  location: { type: String },
  processedLocation: String,
  title: { type: String },
  image: { type: String },
  description: { type: String },
  shortInfo: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  startDate: { type: Date },
  timeFrom: { type: String },
  timeTo: { type: String },
  status: String,
  joinedPeopleCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  eventCreator: { type: Schema.Types.ObjectId, ref: 'User' },
  joinedPeople: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Event', eventSchema);
