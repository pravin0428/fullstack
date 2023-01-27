import {
  Box,
  Button,
  Container,
  Editable,
  EditablePreview,
  EditableTextarea,
  FormLabel,
  Grid,
  GridItem,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { patchData } from "../HttpSevices/posts";
import FileBase64 from "react-file-base64";
const initState = {
  title: "",
  imageFileSet: "",
  body: "",
};
function Edit() {
  const [formData, setFormData] = useState(initState);
  console.log(formData);
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  AddPost()
    patchData(formData)
      .then((res) => {
        console.log(res);

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

  return (
    <Container maxWidth="lg" border="2px solid red">
      <Grid Container>
        {/* for image updating */}
        <Grid item xs={12} sm={4}></Grid>

        {/* form container */}
        <Grid item xs={12} sm={8}>
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
              <Editable
                defaultValue="enter product body"
                border="2px solid black"
              >
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default Edit;
