const { object } = require("joi")
const joi = require("joi")

module.exports.validatePost = ({body}) =>{
    const schema = object.joi({
        title : joi.string().required().label("Title"),
        discription : joi.string().required().label("discription"),
        imageFileSet : joi.string().required().label("imageFileSet"),
        publishedAt : joi.date().default(Date.now()) 

    })

    const responce =  schema.validate(body , {AbortEarly: false})
    return responce
}