import axios from "axios";

export const getAllPosts = () => {
  return axios.get("http://localhost:8080/posts");
};

export const getAllPostsDetailsById = ({ id }) => {
  console.log(id);
  return axios.get(`http://localhost:8080/posts/${id}`);
};

//delte post by id for

export const deletePost = (id) => {
  console.log(id);
  return axios.delete(`http://localhost:8080/posts/${id}`);
};

// post data requetst working perfectlly fine

export const postData = (creds) => {
  // console.log(creds)
  return axios.post(`http://localhost:8080/posts`, creds);
};

//this is for edit post but now i am doing this opration in componenet itself

//    export const demo  = async({id , formData}) =>{
//     let newData = await axios.put(`http://localhost:8080/posts/${id}`, formData)
//       return newData
//  }
