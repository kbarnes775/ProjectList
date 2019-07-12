const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "List Item"
    }]
});

module.exports = mongoose.model("List", ListSchema);