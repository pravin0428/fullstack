import axios from "axios";

export const getAllPosts = () => {
    return axios.get("http://localhost:3001/posts");
  };

export const getAllPostsDetailsById = ({id}) => {
  axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
    console.log(res);
    return res;
  });
};

//delte post by id for 

export const deletePost = (id) => {
    console.log(id)
    return axios.delete(`http://localhost:3001/posts/${id}`);
  };

  export const postData = (creds) => {
    console.log(creds)
    return axios.post(`http://localhost:3001/posts` , creds);
  };

  export const patchData = (creds) => {
    console.log(creds)
    return axios.post(`http://localhost:3001/posts` , creds);
  };

