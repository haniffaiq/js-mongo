import { Schema } from 'mongoose';

function generateUUID(): string {
    const timestamp = new Date().getTime().toString(16);
    const randomPart = Math.floor(Math.random() * 1000000000).toString(16);
    return `${timestamp}-${randomPart}`;
}
const newsSchema = new Schema({
    bahasa: [{
        id: { type: String, required: true},
        date: { type: String, required: true },
        headline: { type: String, required: true },
        deskripsi: { type: String, required: true },
        maker: { type: String, required: true },
        urlImage: { type: String, required: true },
        alt: { type: String, required: true },
    }],
    english: [{
        id: { type: String, required: true},
        date: { type: String, required: true },
        headline: { type: String, required: true },
        deskripsi: { type: String, required: true },
        maker: { type: String, required: true },
        urlImage: { type: String, required: true },
        alt: { type: String, required: true },
    }],
});

export default newsSchema;