const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    
  },
  content: {
    type: String,
    required: true,
  },
 
},{timestamps: true});

const Blog = mongoose.model("MataBlog", blogSchema);

module.exports = { Blog };
