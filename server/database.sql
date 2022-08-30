CREATE TABLE employees (
	id SERIAL PRIMARY KEY NOT NULL,
	f_name VARCHAR(255) NOT NULL,
	l_name VARCHAR(255) NOT NULL, 
	department VARCHAR(50) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	phone VARCHAR(15) NOT NULL UNIQUE,
	photo_url VARCHAR(255)
);

CREATE TABLE visits (
	id SERIAL PRIMARY KEY NOT NULL,
	--rename "name"
	name VARCHAR(255) NOT NULL, 
	company VARCHAR(50),
	email VARCHAR(255),
	phone VARCHAR(15) NOT NULL,
	host_id INT REFERENCES employees(id),
	purpose VARCHAR(255) NOT NULL,
	sign_in TIME DEFAULT CLOCK_TIMESTAMP()::TIME(0),
	sign_out TIME,
	date DATE DEFAULT CLOCK_TIMESTAMP()::DATE,
	photo_url VARCHAR(255)
);


--LAST ITEM IN TABLE
select *from getLastRecord ORDER BY id DESC LIMIT 1;

--WHO IS VISITNG WHICH EMPLOYEE
SELECT employees.f_name AS host_name, employees.email AS host_email, employees.phone AS host_phone, visits.name AS visitor_name, visits.email AS visitor_email, visits.phone AS visitor_phone FROM employees
JOIN visits
ON employees.id = visits.host_id
WHERE visits.id = 2;

--INSERT INTO VISITS TABLE FROM FORM DATA
INSERT INTO visitors (name, phone, email, company, purpose, host_id, photo_url)
VALUES ($1, $2, $3, $4, $5, $6, $7);

