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
