import db from '../config/DB.js';

const movieSchema = new db.Schema({
    name: {
        type: String,
        required: true
    },
    realase_date: {
        type: Date,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    classification: {
        type: String,
        enum: ['Livre', 'Maior16', 'Maior18'],
        required: true
    }
})
const Movie = db.model("Movie", movieSchema);
export default Movie