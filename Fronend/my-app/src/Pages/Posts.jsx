import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonComp from "../Components/ButtonComp";
import { getAllPosts } from "../HttpSevices/posts";

function Posts() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    getAllPosts()
      .then((res) => {
         console.log(res.data.data,"in the post-------**------")
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {data &&
        data.map((elem) => (
          <div key={elem.id}>
            <Card>
              <CardHeader>
                <Heading size="md">{elem.title}</Heading>
              </CardHeader>
              <CardBody>
                <Img src={elem.imageFileSet} mb={4} />
              </CardBody>
              <CardFooter margin="auto" justifyItems="center">
                <Link to={`/posts/${elem.id}`}>
                  <ButtonComp name="View Product Details" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
    </SimpleGrid>

    // <div>
    //   <SimpleGrid
    //     border="1px solid black"
    //     minChildWidth="300px"
    //     spacing="40px"
    //     p={5}
    //   >
    //     {data &&
    //       data.map((elem) => (
    //         <Stack key={elem.id} border="3px solid red" p={5}>
    //           <Link to={`/posts/${elem.id}`}>
    //             <Text mb={4}> {elem.title} </Text>
    //             <Img src={elem.imageFileSet} mb={4} />
    //             <Text> {elem.body} </Text>
    //             {/* <Text> {elem.price} </Text> */}
    //           </Link>
    //         </Stack>
    //       ))}
    //   </SimpleGrid>
    // </div>
  );
}

export default Posts;
