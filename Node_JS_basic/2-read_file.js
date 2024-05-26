const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
