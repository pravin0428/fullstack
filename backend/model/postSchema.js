const { model, Schema } = require("mongoose");

const PostSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  discription: {
    type: String,
    require: true,
  },
  imageFileSet: {
    type: String,
    require: true,
  },
  publishedAt : {
    type : Date
  }
});

 module.exports =  model("posts", PostSchema);
 
