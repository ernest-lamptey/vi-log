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
	name VARCHAR(255) NOT NULL, 
	company VARCHAR(50),
	email VARCHAR(255),
	phone VARCHAR(15) NOT NULL UNIQUE,
	host_id INT REFERENCES employees(id),
	purpose VARCHAR(255) NOT NULL,
	sign_in TIME DEFAULT CLOCK_TIMESTAMP()::TIME(0),
	sign_out TIME,
	date DATE DEFAULT CLOCK_TIMESTAMP()::DATE,
	photo_url VARCHAR(255)
);