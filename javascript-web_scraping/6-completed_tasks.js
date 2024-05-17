#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    const tasks = JSON.parse(body);
    const completedTasks = tasks.filter((task) => task.completed === true);
    console.log(completedTasks.length);
  }
});
