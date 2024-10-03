import db from '../config/DB.js';

const renderSchema = new db.Schema({
    user: {
        type: String,
        required: true
    },
    movie_name: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    },
    devolution_date: {
        type: Date,
        required: true
    }
})
const Render = db.model("Render", renderSchema);
export default Render