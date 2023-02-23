import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItemOption,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

 
import SingleProCard from "../Components/SingleProCard";
import { getPostsDetailsById } from "../HttpSevices/posts";

function UserAddToCart() {
  const [proData, setProData] = useState({});
  const navigate = useNavigate()
  const toast = useToast()
  // console.log(proData);
  const { id } = useParams();
  // console.log(id , "||||||");
  useEffect(() => {
    getPostsDetailsById(id)
      .then((res) => {
        // console.log(res.data ,"in the post-------**------")
        setProData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleAddToCart = () =>{
              toast({
              position: "bottom-right",
              render: () => (
                <Box color="white" p={3} bg="orange">
                   Product added to cart
                </Box>
            ),
            })
    navigate("/")
    }

  // just for date addition
  const dateFormat = () => {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };
 
  return (
    <>
     <SingleProCard
        key={proData._id}
        title={proData.title}
        proImage={proData.imageFileSet}
        body={proData.description}
        id={proData._id}
        button_text="Add To Cart"
        handleAddToCart={handleAddToCart}
      />
    </>
  );
}
export default UserAddToCart;