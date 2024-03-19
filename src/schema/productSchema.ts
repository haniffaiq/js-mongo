import { Schema } from 'mongoose';


const productSchema = new Schema({
    name: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    brandId: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
});

export default productSchema