import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const checkRoleAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.status(401).json({ message: 'Authentication failed' });
    return 
  }

  try {
    const decoded = verify(token, 'rahasiaBanget13#');
    const role = (decoded as { role: string }).role;
    if (role !== 'admin') {
      throw new Error('Unauthorized');
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default checkRoleAdmin;
