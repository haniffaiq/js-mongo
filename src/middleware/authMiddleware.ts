import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.status(401).json({ message: 'Authentication failed' });
    return;
  }

  try {
    const decoded = verify(token, 'Hanfix13@');
    req.body.userId = (decoded as { _id: string })._id;
    next(); 
  } catch (error:any) {
    res.status(401).json({ message: 'Invalid token'});
  }
};

export default authMiddleware;
