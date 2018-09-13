var team = require('./Team')
var mongoose = require('mongoose');
var DepartmentSchema = new mongoose.Schema({
	name: String,
	teams: [team]
});
mongoose.model('Department', DepartmentSchema);

module.exports = mongoose.model('Department');
