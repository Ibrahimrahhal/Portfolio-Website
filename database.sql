CREATE TABLE Messages(
ID INT PRIMARY KEY AUTO_INCREMENT,
Name VARCHAR(50),
EMAIL VARCHAR(75),
MESSAGE VARCHAR(2000)




);
ALTER DATABASE <database_name> CHARACTER SET utf8 COLLATE utf8_unicode_ci;
ALTER TABLE <table_name> CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;