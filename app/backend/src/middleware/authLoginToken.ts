import { Request, Response, NextFunction } from 'express';
import jwt from '../utils/JWT';

function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const tokenReplace = token.replace('Bearer ', '');

    const tokenDecoded = jwt.verify(tokenReplace);

    req.body.user = tokenDecoded;
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  return next();
}

export default validateToken;
