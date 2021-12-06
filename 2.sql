-- Пункт №1

SELECT Student.FirstName, Student.LastName, COUNT(Student.StudentId) as count 
FROM Student INNER JOIN Exams 
ON Student.StudentId = Exams.StudentId
WHERE Exams.Result < 3
GROUP BY Student.StudentId HAVING count >= 2;

-- Пункт №2

SELECT S.Group
  FROM Student S JOIN 
    (SELECT Student.StudentId, COUNT(Exams.StudentId) as СountRec
       FROM Student INNER JOIN Exams ON Student.StudentId = Exams.StudentId
       WHERE Exams.Result < 3
       GROUP BY Student.StudentId) U ON U.StudentId=S.StudentId AND U.СountRec>=2
  GROUP BY S.Group
  HAVING COUNT(U.StudentId) >=10
