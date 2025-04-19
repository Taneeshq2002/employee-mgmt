const Employee = require('../models/employeeModel');

exports.getAll = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.getOne = async (req, res) => {
  const emp = await Employee.findById(req.params.id);
  res.json(emp);
};

exports.create = async (req, res) => {
  const newEmp = new Employee(req.body);
  await newEmp.save();
  res.json(newEmp);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  console.log(updateData);
  // Ensure _id is not part of the update request
  //delete updateData._id;

  try {
    const updated = await Employee.findByIdAndUpdate(id, updateData, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Error updating employee', error: err });
  }
};

exports.delete = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Employee.findOne({ email, password });
  if (user) res.json(user);
  else res.status(401).json({ message: 'Invalid credentials' });
};
