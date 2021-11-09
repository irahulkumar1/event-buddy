const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const confimationHashSchema = new Schema({
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '1d' }
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }

});

module.exports = mongoose.model('confimationHashSchema', confimationHashSchema);
