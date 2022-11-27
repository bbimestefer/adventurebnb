const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post('/', validateSignup, async (req, res) => {
    const { firstName, lastName, email, password, username } = req.body;

    if(!email || !username || !firstName || !lastName) {
      res.status(400)
      res.json({
        "message": "Validation error",
        "statusCode": 400,
        "errors": {
          "email": "Invalid email",
          "username": "Username is required",
          "firstName": "First Name is required",
          "lastName": "Last Name is required"
        }
      })
    }

    const users = await User.findAll()

    users.forEach(user => {
      if(username === user.username){
        res.status(403)
        res.json({
          "message": "User already exists",
          "statusCode": 403,
          "errors": {
            "email": "User with that username already exists"
          }
        })
      } else if(email === user.email) {
        res.status(403)
        res.json({
          "message": "User already exists",
          "statusCode": 403,
          "errors": {
            "email": "User with that email already exists"
          }
        })
      }
    });

    const user = await User.signup({ firstName, lastName, email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user: user
    });
  }
);

module.exports = router;
