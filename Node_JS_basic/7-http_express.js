const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Students endpoint
app.get('/students', (req, res) => {
  const dbFilePath = process.argv[2]; // Get the database file path from command line arguments
  countStudents(dbFilePath)
    .then(() => {
      res.send('This is the list of our students');
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// Listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
