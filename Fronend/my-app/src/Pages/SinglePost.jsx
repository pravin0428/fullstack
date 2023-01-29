import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonComp from "../Components/ButtonComp";
import ModalComp from "../Components/ModalComp";
import SingleProCard from "../Components/SingleProCard";

const getAllPostsDetailsById = (url) => {
  return fetch(url).then((res) => res.json());
};

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

function SinglePost() {
  const [proData, setProData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(proData);
  const { id } = useParams();

  useEffect(() => {
    getAllPostsDetailsById(`http://localhost:3001/posts/${id}`).then((res) =>
      setProData(res)
    );
  }, [id]);

  const opneModelCom = () => {
    setIsModalOpen(true);
  };

  // just for date addition
  const dateFormat = () => {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  return (
    <>
      <Box 
        border="2px solid green" 
      display="flex"  p={1} 
    
      >
        
        <Menu>
          {({ isOpen }) => (
            <>
           
            <MenuButton
                isActive={isOpen}
                // as={Button}
                rightIcon={<ChevronDownIcon />}
                 border="4px solid green"
             
                 ml="10px"
              
              >
                {isOpen ? "Close" : "More"}
              </MenuButton>
         
               
              <MenuList>
                <Link to={`/posts/edit/${id}`}>
                  {" "}
                  <MenuItem>EDIT</MenuItem>
                </Link>

                <MenuItem onClick={opneModelCom}>
                  <ModalComp
                    isOpen={isModalOpen}
                    setIsOpe={setIsModalOpen}
                    title={proData.title}
                    id={id}
                  />
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
      <Text>
      {!proData.publishedAt ? dateFormat(proData.publishedAt) : null}
      </Text>
      <SingleProCard key={proData.id}  title={proData.title} proImage={proData.imageFileSet} body= {proData.body}  />

      {/* <Center py={12} 
      // border="4px solid green"
      >
        <Box
        border="4px solid pink"
          role={"group"}
          p={4}
          mt="-10"
          maxW={"380px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
                   <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {proData.title}
            </Text>
          <Box
           border="4px solid red"
            rounded={"lg"}
            mt={2}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height="95%"
              width="95%"
              margin="auto"
              justifySelf="center"
              objectFit={"cover"}
              src={proData.imageFileSet}
            />
          </Box>
          <Stack pt={10} align={"center"}>
    
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {proData.body}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text>
                {!proData.publishedAt ? dateFormat(proData.publishedAt) : null}
              </Text>

              <Text textDecoration={"line-through"} color={"gray.600"}>
                $199
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center> */}
    </>
  );
}

export default SinglePost;
