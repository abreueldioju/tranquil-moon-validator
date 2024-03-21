# tranquil-moon-validator

A JavaScript library for validating user data using Yup.

## Installation

```
npm install tranquil-moon-validator
```

## Usage

```javascript
const {
  validateUser,
  isValidEmail,
  isPositiveInteger,
  isValidUsername,
  validateUserAge
} = require('tranquil-moon-validator');

// Validate user data
const user = {
  username: 'john_doe',
  email: 'john@example.com',
  age: 30
};

const validationResult = validateUser(user);
console.log(validationResult);

// Check if an email is valid
const email = 'invalid_email@example';
const isValid = isValidEmail(email);
console.log(isValid); // Output: false

// Check if a number is positive and an integer
const num = 10.5;
const isPosInt = isPositiveInteger(num);
console.log(isPosInt); // Output: false

// Check if a string is a valid username
const username = 'john_doe';
const isValidUsername = isValidUsername(username);
console.log(isValidUsername); // Output: true

// Validate user age
const age = 25;
const isValidAge = validateUserAge(age);
console.log(isValidAge); // Output: true
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
