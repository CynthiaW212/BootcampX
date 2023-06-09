const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const queryString = `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = $1
ORDER BY teacher`;

const values = [`${process.argv[2]}`];
pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(teacher => {
      console.log(`${teacher.cohort}: ${teacher.teacher}`);
    });
  }).catch(err => console.error('query error', err.stack));
