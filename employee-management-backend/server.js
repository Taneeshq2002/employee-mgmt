const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const app = express();
const PORT = 5000;

// require('dotenv').config();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/empDB")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
