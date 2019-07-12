const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
      type: String,
      required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

module.exports = mongoose.model("ListItem", ListItemSchema);