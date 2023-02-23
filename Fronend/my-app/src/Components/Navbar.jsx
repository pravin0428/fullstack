import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import ButtonComp from "./ButtonComp";
import PostAndAddPostLink from "./PostAndAddPostLink";
import MenuSmallScreen from "./MenuSmallScreen";
import { useSelector } from "react-redux";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {role ,  userEmail , isAuth} = useSelector((store) => store.auth);
  
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <Box>Logo</Box>
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {/* add post button */}

              {role  === "Admin" ? (
               <>
                  <PostAndAddPostLink />
                 <MenuSmallScreen />
               </>
              ) : (
                null
              )}
              
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

             {role === "Admin" ?(
            <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Button borderRadius="50%" backgroundColor="blue.100" >{userEmail[0].toUpperCase()}</Button>
                </MenuButton>

                 <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                  <Button borderRadius="50%" backgroundColor="blue.100" >{userEmail[0].toUpperCase()}</Button>
                  </Center>
                  <br />
                  <Center>
                   {isAuth ? <p>{userEmail}</p> : <p>name</p>}  
                  </Center>
                  <br />
                  <MenuDivider />

                  <MenuItem>
                    <PostAndAddPostLink />
                  </MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem as="Button" onClick={() => isAuth ? !isAuth  : isAuth} >Logout</MenuItem>
                </MenuList>
              </Menu>  
             ) : (
              <> 
              {isAuth? <Button onClick={() => isAuth ? !isAuth  : isAuth} >Logout</Button> : 
              <>  <Link to="/signup" >Signup</Link>
              <Link to="/login" >Login</Link></>
              }
               
               </>
             )}
             

 

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;
