SELECT name,id,email,cohort_id
FROM students
where email NOT LIKE '%gmail.com' 
AND phone IS NULL;