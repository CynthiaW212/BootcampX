SELECT teachers.name as teacher, cohorts.name as cohort,
       count(assistance_requests.id) as total_assistances
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name ='JUL02'
GROUP BY teachers.name,cohorts.name
ORDER BY teacher;