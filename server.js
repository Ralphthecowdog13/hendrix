require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const intakeRoutes = require('./routes/intakeRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', intakeRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 3001, () => console.log('Server running'));
}).catch(console.error);
