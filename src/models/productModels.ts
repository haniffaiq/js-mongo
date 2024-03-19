import { model } from 'mongoose';
import productSchema from '../schema/productSchema';

const Product = model('Product', productSchema, "product");

export default Product;