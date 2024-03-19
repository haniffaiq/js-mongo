import { model } from 'mongoose';
import brandSchema from '../schema/brandSchema';

const Brand = model('Brand', brandSchema, "brand");

export default Brand;