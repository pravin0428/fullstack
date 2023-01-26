import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "./AddPost";
import Edit from "./Edit";
import Posts from "./Posts";
import Signup from "./Signup";
import SinglePost from "./SinglePost";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<SinglePost />} />
      <Route path="/posts/edit/:id" element={<Edit />} />
      <Route path="/addpost" element={<AddPost />} />
    </Routes>
  );
}

export default AllRoutes;
