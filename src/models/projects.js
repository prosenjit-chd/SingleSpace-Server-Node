const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    client: {
        type: String,
        required: true,
        trim: true
    },
    technology: {
        type: String,
        required: true,
        trim: true
    },
    livesite: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: Array,
        required: true,
        trim: true
    },
    coverphoto: {
        type: String,
        required: true,
        trim: true
    },
    imgsrc: {
        type: Array,
        required: true
    }

})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project