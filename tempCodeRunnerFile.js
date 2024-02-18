const sqlite3 = require('sqlite3').verbose();
const path = require('path');
let currentIndexValue = 0;


// Path to the SQLite database file
const dbPath = path.resolve(__dirname, 'db/user.db');

// Open the database
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the user database.');
        createUsersTable(); // Call function to create users table
    }
});




// Function to create the users table if it doesn't exist
function createUsersTable() {
    const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
                                id INTEGER PRIMARY KEY,
                                username TEXT,
                                email TEXT,
                                password TEXT,
                                weight DECIMAL,
                                height DECIMAL,
                                age INTEGER,
                                goal INTEGER
                            )`;

    db.run(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating users table:', err.message);
        } else {
            console.log('Users table created or already exists.');
            // Retrieve the index value when the table is created
            getIndexValue();
        }
    });
}

// Function to insert values into the users table
function insertUser(id, username, email, password, weight, height, age, goal) {
    // If id is not provided, use the currentIndexValue to auto-increment
    if (!id) {
        id = this.lastID + 1;
    }

    const query = `INSERT INTO users (id, username, email, password, weight, height, age, goal) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.run(query, [id, username, email, password, weight, height, age, goal], function (err) {
        if (err) {
            console.error('Error inserting user:', err.message);
        } else {
            console.log(`A row has been inserted with rowid ${this.lastID}`);
            currentIndexValue = this.lastID;
        }
    });
    setTimeout(printDataTable, 300);
}

// Function to get the current index value
function getIndexValue() {
    const query = `SELECT MAX(id) AS maxId FROM users`;
    db.get(query, [], (err, row) => {
        if (err) {
            console.error('Error getting index value:', err.message);
        } else {
            // Update the currentIndexValue
            currentIndexValue = row.maxId;
            console.log('Current index value:', currentIndexValue);
        }
    });
}

function updateWeight(userId, newWeight) {
    const query = `UPDATE users
                   SET weight = ?
                   WHERE id = ?`;
    db.run(query, [newWeight, userId], function (err) {
        if (err) {
            console.error('Error updating weight:', err.message);
        } else {
            console.log(`Weight updated for user with id ${userId}`);
        }
    });
}

// Function to update the height value in the database for a given user id
function updateHeight(userId, newHeight) {
    const query = `UPDATE users
                   SET height = ?
                   WHERE id = ?`;
    db.run(query, [newHeight, userId], function (err) {
        if (err) {
            console.error('Error updating height:', err.message);
        } else {
            console.log(`Height updated for user with id ${userId}`);
        }
    });
}

// Function to update the age value in the database for a given user id
function updateAge(userId, newAge) {
    const query = `UPDATE users
                   SET age = ?
                   WHERE id = ?`;
    db.run(query, [newAge, userId], function (err) {
        if (err) {
            console.error('Error updating age:', err.message);
        } else {
            console.log(`Age updated for user with id ${userId}`);
        }
    });
}

// Function to update the email value in the database for a given user id
function updateEmail(userId, newEmail) {
    const query = `UPDATE users
                   SET email = ?
                   WHERE id = ?`;
    db.run(query, [newEmail, userId], function (err) {
        if (err) {
            console.error('Error updating email:', err.message);
        } else {
            console.log(`Email updated for user with id ${userId}`);
        }
    });
}

// Function to update the password value in the database for a given user id
function updatePassword(userId, newPassword) {
    const query = `UPDATE users
                   SET password = ?
                   WHERE id = ?`;
    db.run(query, [newPassword, userId], function (err) {
        if (err) {
            console.error('Error updating password:', err.message);
        } else {
            console.log(`Password updated for user with id ${userId}`);
        }
    });
}

// Function to update the username value in the database for a given user id
function updateUsername(userId, newUsername) {
    const query = `UPDATE users
                   SET username = ?
                   WHERE id = ?`;
    db.run(query, [newUsername, userId], function (err) {
        if (err) {
            console.error('Error updating username:', err.message);
        } else {
            console.log(`Username updated for user with id ${userId}`);
        }
    });
}

// Function to update the goal value in the database for a given user id
function updateGoal(userId, newGoal) {
    const query = `UPDATE users
                   SET goal = ?
                   WHERE id = ?`;
    db.run(query, [newGoal, userId], function (err) {
        if (err) {
            console.error('Error updating goal:', err.message);
        } else {
            console.log(`Goal updated for user with id ${userId}`);
        }
    });
}
function printDataTable() {
    const query = `SELECT * FROM users`;
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error fetching data:', err.message);
        } else {
            console.log('Data Table:');
            console.table(rows);
        }
    });
}

module.exports = { insertUser, updateWeight, updateHeight, updateAge, updateEmail, updatePassword, updateUsername, updateGoal, db, getIndexValue, printDataTable };