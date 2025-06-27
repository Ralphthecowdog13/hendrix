require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const intakeRoutes = require('./routes/intakeRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', intakeRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
  
  // Start the server
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });

}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // allow all origins - good for dev, restrict later if you want

// Your other middleware/routes
