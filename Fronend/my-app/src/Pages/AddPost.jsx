import {
  Box,
  Button,
  Container,
  Editable,
  EditablePreview,
  EditableTextarea,
  Input,
  useToast,
  FormLabel,
} from "@chakra-ui/react";

import React from "react";
import { useState } from "react";
import joi from "joi-browser";
import { postData } from "../HttpSevices/posts";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";

const initState = {
  title: "",
  imageFileSet: "",
  body: "",
};

function AddPost() {
  const [formData, setFormData] = useState(initState);
  // console.log(formData);
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    //validation
    const { error } = joi.validate([e.target.name], schema[e.target.name], {
      abortEarly: true,
    });
    console.log("re----re", error);
    // !error?error[target.name] = "" : error[target.name] = error.details[0].message
    // console.log(e.target.name);
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  AddPost()
    postData(formData)
      .then((res) => {
         console.log(res , ":::::-------::::::");

        toast({
          position: "bottom-right",
          render: () => (
            <Box color="white" p={3} bg="blue.500">
              Product added successfully
            </Box>
          ),
        });
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //now will goin to validate our form inputs using joi-browser

  const schema = {
    title: joi.string().required().label("Title").min(5),
    imageFileSet: joi.string().required().label("imageFileSet"),
    body: joi.string().required().label("body"),
  };

  return (
    <Container maxWidth="lg">
      <Box padding={2} border="2px solid green" mt={50}>
        <form onSubmit={handleSubmit}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            border="2px solid black"
            placeholder="enter product name"
            name="title"
            value={formData.title}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <FormLabel>Image</FormLabel>
          <Box border="1px solid red" mt={2} mb={1}>
            <FileBase64
              onDone={(e) => {
                formData.imageFileSet = e.base64;
              }}
            />
          </Box>

          <FormLabel>body</FormLabel>
          {/* <Input type='text' border="2px solid black" placeholder='enter product body'  /> */}
          <Editable defaultValue="enter product body" border="2px solid black">
            <EditablePreview />
            <EditableTextarea
              name="body"
              value={formData.body}
              onChange={(e) => handleChange(e)}
            />
          </Editable>
          <br />
          <br />
          <Button
            color={"white"}
            bg={"green.400"}
            _hover={{
              bg: "green.500",
            }}
            onClick={(e) => handleSubmit(e)}
          >
            ADD
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default AddPost;
