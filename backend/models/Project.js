const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "List"
    }]
});

module.exports = mongoose.model("Project", ProjectSchema);