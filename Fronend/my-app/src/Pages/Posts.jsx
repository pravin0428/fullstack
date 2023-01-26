import { Box, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link  } from "react-router-dom";
import { getAllPosts } from "../HttpSevices/posts";

function Posts() {
  const [data, setData] = useState([]);
 
  console.log(data);
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

 

  return (
    <div>
      <SimpleGrid border="1px solid black" minChildWidth="300px" spacing="40px">
        {data &&
          data.map((elem) => (
            <Stack key={elem.id} border="3px solid red">
            <Link to={`/posts/${elem.id}`} >  
              <Img src={elem.imageFileSet} />
              <Text> {elem.title} </Text>
              <Text> {elem.body} </Text>
              {/* <Text> {elem.price} </Text> */}
              </Link>  
            </Stack>
          ))}
      </SimpleGrid>
    </div>
  );
}

export default Posts;
