const mongoose = require('mongoose');
const employee = require('./Employee');

const TeamSchema = new mongoose.Schema({
  name: String,
  employees: [employee]
});
mongoose.model('Team', TeamSchema);

module.exports = mongoose.model('Team');
