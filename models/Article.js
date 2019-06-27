let mongoose = require("mongoose");

let schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    comment: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;