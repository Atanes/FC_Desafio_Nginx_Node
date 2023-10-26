CREATE TABLE people(
       person_id INT PRIMARY KEY AUTO_INCREMENT, 
       person_name VARCHAR(60)
);
INSERT INTO people(person_name) VALUES("Alexandre Jesus");
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'; 
flush privileges;