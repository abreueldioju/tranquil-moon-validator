const yup = require('yup');

// Define the schema using Yup
const userSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
});

// Function to validate user data
function validateUser(user) {
  return userSchema.validate(user, { abortEarly: false })
    .then(validatedUser => ({ isValid: true, validatedUser }))
    .catch(error => ({ isValid: false, errors: error.errors }));
}

// Function to check if a string is a valid email
function isValidEmail(email) {
  return yup.string().email().isValidSync(email);
}

// Function to check if a number is positive and an integer
function isPositiveInteger(num) {
  return yup.number().positive().integer().isValidSync(num);
}

// Function to check if a string is a valid username
function isValidUsername(username) {
  return yup.string().required().isValidSync(username);
}

// Function to validate user age
function validateUserAge(age) {
  return yup.number().positive().integer().required().isValidSync(age);
}

module.exports = {
  validateUser,
  isValidEmail,
  isPositiveInteger,
  isValidUsername,
  validateUserAge
};
