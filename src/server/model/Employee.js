var mongoose = require('mongoose');
var EmployeeSchema = new mongoose.Schema({
	full_name: String,
	position: String,
});
mongoose.model('Employee', EmployeeSchema);

module.exports = mongoose.model('Employee');
