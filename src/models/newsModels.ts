import { model } from 'mongoose';
import newsSchema from '../schema/newsSchema';

const News = model('News', newsSchema, "news");

export default News;