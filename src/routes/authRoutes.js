const express = require('express');
const router = express.Router();
const { register, login, protected } = require('../controllers/authController');
const { registerValidation, loginValidation } = require('../utils/validate');
const auth = require('../middlewares/authMiddleware');
const { validationResult } = require('express-validator');

router.post('/register', registerValidation, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, register);

router.post('/login', loginValidation, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, login);

router.get('/protected', auth, protected);

module.exports = router;
