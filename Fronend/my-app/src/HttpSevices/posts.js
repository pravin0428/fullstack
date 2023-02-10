import axios from "axios";
import { wait } from "joi-browser";

export const getAllPosts = () => {
  return axios.get("https://curd-app-database.onrender.com/posts");
};

export const getPostsDetailsById = (id) => {
  // console.log(id , "******");
  return axios.get(`https://curd-app-database.onrender.com/posts/${id}`);
};

export const postData = async(creds) => {
  //  console.log(creds,"----------post data")
  // return axios.post(`https://curd-app-database.onrender.com/posts`, creds);

  let res = await axios.post("https://curd-app-database.onrender.com/posts" , creds)
   return res 

};

// export const postData = (creds) => {
//   fetch("https://curd-app-database.onrender.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(creds)
//   })
//     .then((res) => res.json())
//     .then((res) => {
     
//         console.log(res  , "res----*******")
      
//     });
// }


export const putDataEdit  = async(id , formData) =>{
  let newData = await axios.put(`https://curd-app-database.onrender.com/posts/${id}`, formData)
    return newData
}

export const deletePost = (id) => {
  console.log(id);
  return axios.delete(`https://curd-app-database.onrender.com/posts/${id}`);
};