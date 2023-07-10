const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const notesSchema = new Schema({
  text: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, required: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('Notes', notesSchema);