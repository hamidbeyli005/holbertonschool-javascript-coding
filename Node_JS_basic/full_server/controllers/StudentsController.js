// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('./database.csv');
      res
        .status(200)
        .send('This is the list of our students\n' + JSON.stringify(students));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      try {
        const students = await readDatabase('./database.csv');
        const majorStudents = students[major] || [];
        res.status(200).send(`List: ${majorStudents.join(', ')}`);
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
  }
}

export default StudentsController;
