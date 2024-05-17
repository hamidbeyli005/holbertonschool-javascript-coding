#!/usr/bin/node
const url = process.argv[2];

request(url, (err, response, body) => {
  {
    if (err) {
      console.error(err);
    } else {
      const films = JSON.parse(body).results;
      let count = 0;
      for (let i = 0; i < films.length; i++) {
        const characters = films[i].characters;
        if (characters.includes("https://swapi-api.hbtn.io/api/people/18/")) {
          count++;
        }
      }
      console.log(count);
    }
  }
});
