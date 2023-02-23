import React from 'react'
import {Routes , Route} from "react-router-dom"
import AddPost from './AdminAddPost'
import Edit from './AdminEdit'
import Login from './Login'
import AdminHome from './AdminHome'
import Signup from './Signup'
import SinglePost from './AdminSinglePost'
import UserHomePage from './UserHomePage'
import UserAddToCart from './UserAddToCart'
function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={< UserHomePage />} />
        <Route path="/signup" element={< Signup />} />
        <Route path="/login" element={< Login />} />
        <Route path="/addtocartuser/:id" element={< UserAddToCart/>} />

        <Route path="/posts" element={< AdminHome />} />
        <Route path="/posts/:id" element={< SinglePost />} />
        <Route path="/posts/:id/edit" element={< Edit />} />  
        <Route path="/addpost" element={< AddPost />} />
    </Routes>
  )
}

export default AllRoutes