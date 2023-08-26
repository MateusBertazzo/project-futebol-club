import { Request, Response, NextFunction } from 'express';

import validator from 'validator';

function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  return next();
}
function validateEmail(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  return next();
}

function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!validator.isLength(password, { min: 6, max: 50 })) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  return next();
}

export {
  validateLogin,
  validateEmail,
  validatePassword,
};
