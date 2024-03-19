import { Schema } from 'mongoose';


const brandSchema = new Schema({
    name: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    readPermission: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    fullPermission: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export default brandSchema