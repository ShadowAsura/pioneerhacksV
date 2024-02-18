import { insertUser, updateWeight, updateHeight, updateAge, updateEmail, updatePassword, updateUsername, updateGoal, db, getIndexValue, printDataTable } from './index.js';

// Define the main function
function main() {
    // Insert a user (example)
    setTimeout(empty, 100)
    insertUser(null, "bigger", "nlackbigger@example.com", "dipeshIsFat123", 160, 59, 16, 3);
    updateWeight(3, 75); // Update weight for user with ID 1
    updateHeight(10, 72); // Update height for user with ID 1c

    // Update user information (example)

    // Print data table (example)
}

function empty() {
    // This is an empty function, added to demonstrate setTimeout
}

// Call the main function
main();
