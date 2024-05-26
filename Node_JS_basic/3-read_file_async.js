const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = {};

        lines.forEach((line) => {
          if (line) {
            // Ignore empty lines
            const [student, field] = line.split(',');
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(student);
          }
        });

        const totalStudents = Object.values(students).reduce(
          (total, field) => total + field.length,
          0
        );
        console.log(`Number of students: ${totalStudents}`);

        for (const field in students) {
          console.log(
            `Number of students in ${field}: ${
              students[field].length
            }. List: ${students[field].join(', ')}`
          );
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
