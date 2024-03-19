import { Schema } from 'mongoose';


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