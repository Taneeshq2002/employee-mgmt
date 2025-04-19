const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, enum: ['employee', 'admin'], default: 'employee' },
  password: String,
  department: String
});

module.exports = mongoose.model('Employee', employeeSchema);
