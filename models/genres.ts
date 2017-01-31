import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

/**
 @typedef {Object} Users
 @property {String} genres - genres of a music
 */
const genresSchema = new Schema({
  genres: String
});

export default mongoose.model('Genres', genresSchema);
