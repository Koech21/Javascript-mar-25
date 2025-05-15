-- 1. Create the table
CREATE TABLE students_marks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mark INT NOT NULL
);

-- 2. Insert the marks
INSERT INTO students_marks (mark) VALUES
(12),
(95),
(89),
(34),
(56),
(78),
(8),
(32);

-- 3. Get the maximum mark
SELECT MAX(mark) AS max_mark FROM students_marks;
