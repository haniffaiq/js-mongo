import { model } from 'mongoose';
import userSchema from '../schema/userSchema';

const User = model('User', userSchema, "users");

export default User;