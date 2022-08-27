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
	phone VARCHAR(15) NOT NULL,
	host_id INT REFERENCES employees(id),
	purpose VARCHAR(255) NOT NULL,
	sign_in TIME DEFAULT CLOCK_TIMESTAMP()::TIME(0),
	sign_out TIME,
	date DATE DEFAULT CLOCK_TIMESTAMP()::DATE,
	photo_url VARCHAR(255)
);

--INSERT INTO VISITS TABLE FROM FORM DATA
INSERT INTO visitors (name, phone, email, company, purpose, host_id, photo_url)
VALUES ($1, $2, $3, $4, $5, $6, $7);

    (async () => {
        try {
            await pool.query(
                `INSERT INTO visits (name, phone, email, company, purpose, host_id, photo_url)
                VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
                [body.name, body.phone, body.email, body.company, body.purpose, body.host_id, body.photo_url]
            )
            return "Created successfully"
        } catch (error) {
            throw { status: error?.status || 500, message: error?.message || error }
        }
    })().catch(error => { return error.message })
}