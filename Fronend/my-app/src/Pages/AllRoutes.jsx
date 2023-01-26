import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from './Posts'
import SinglePost from './SinglePost'

function AllRoutes() {
  return (
  
   <Routes>
        <Route path='/posts' element={<Posts/>} />
        <Route path='/posts/:id' element={<SinglePost/>} />
    </Routes>
 
  )
}

export default AllRoutes