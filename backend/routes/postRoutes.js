// const express = require("express")
// const { isValidObjectId } = require("mongoose")
// const PostSchemaModel = require("../model/postSchema")
// const router = express.Router()
 
// const { validatePost } = require("../validators/postValidator")
 

// router.get("/" , async(req , res) => {
//   res.send("hey")
// })

// // decaring routes
// router.get("/" , async(req , res)=>{
//    const data = await PostSchemaModel.find()
//         console.log(data)
//         return res.status(200).send({data})
// })

// router.get("/:id" , async(req , res)=>{
//     const {id} = req.params;
//     if(!isValidObjectId(id)){
//      return res.status(400).send("invalid request id")
//     }
//    const data = await PostSchemaModel.findById(id)
//    console.log(data)
//    if(!data){
//     return res.status(404).send("data not found")
//    }
//    return res.status(200).send({data})
    
//   })


//   router.delete("/:id" , async(req , res)=>{
//      const {id} = req.params

//       if(!isValidObjectId(id)){
//         return res.status(400).send("invalid object id")
       
//       }

//      let data = await PostSchemaModel().findOneAndDelete({_id : id})

//      if(data.rowCount === 0){
//        return res.status(404).send("No data found regarding to this id")
//      }
//      return res.status(200).send({data})

//   })

//   //edit post 

//   router.put("/:id" , async(req , res)=>{
//     // const {data , id} = req.body
//     const  {body , params:{id}} = req

//     if(!isValidObjectId(id)){
//         return res.status(400).send("invalid object id")
       
//       }
//     // so we have to validate the data by using the joi
//     //joi validation of data 
//     // will going to check the all the calue like this are string or not and more 
//     // will need the schema 
    
//     //i have moved the validation in validator folder will dirct use this function here to validate our data
//     const {error , value}=  validatePost({body})
//     if(error){
//         return res.status(400).send({message : "invalid form data"})
//     }

//     const data = await PostSchemaModel().findOneAndUpdate({_id : id} , {...value})
//     if(!data){
//         return res.status(404).send({message : "no data found for update"})

//     }

//     return res.status(200).send({data})

//   })

//   router.post("/" , async(req , res)=>{
//     const {body} = req

//     //validate Date first 

//    const {error , value} =  validatePost({body})
//      if(error){
//         return res.status(400).send({error , message : "invalid form data"})
//      } 

//      // so now to post our data to the server we have to make the new data object and the we have post it 

//     const newPost  =  new PostSchemaModel({...value})
//     const post  =  await newPost.save()
//     if(!post){
//        return res.send("empty post object")
//     }
//    res.status(200).send({ data : post ,  message : "Data added successfully"})
//   })

    // module.exports = router

//   this are the rotes that we need
/*
  <Route path="/" element={<Signup />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<SinglePost />} />
      <Route path="/posts/edit/:id" element={<Edit />} />
      <Route path="/addpost" element={<AddPost />} />
*/

