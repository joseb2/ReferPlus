const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000; // Choose a port number of your choice

// Establish a connection to your MongoDB database
mongoose.connect('mongodb://localhost/my-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  accessToken: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.get('/auth/facebook/callback', async (req, res) => {
  try {
    const authorizationCode = req.query.code;

    // Exchange the authorization code for an access token
    // and store it securely

    const accessToken = 'EXAMPLE_ACCESS_TOKEN'; // Replace with actual access token

    // Save the access token to the database
    const user = new User({ accessToken });
    await user.save();

    // Handle the successful authentication or redirect the user as needed

    res.send('Access token stored successfully');
  } catch (error) {
    console.error('Error occurred during Facebook callback:', error);
    // Handle the error and send an appropriate response
    res.status(500).send('Error occurred during Facebook callback');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection disconnected through app termination');
    process.exit(0);
  });
});
