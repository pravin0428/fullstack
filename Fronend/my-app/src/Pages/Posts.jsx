import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CardGrid from "../Components/CardGrid";
import { getAllPosts } from "../HttpSevices/posts";

function Posts() {
  const [data, setData] = useState([]);
console.log(data)
  useEffect(() => {
    getAllPosts()
      .then((res) => {
        // console.log(res.data)
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return(
    <div>
        {
    data.map((elem)=>(
      <CardGrid key={elem.id} 
      proImage={elem.imageFileSet}
      title={elem.title}
      dis={elem.body}
      />
    ))
   }
    </div>
  );
}

export default Posts;
