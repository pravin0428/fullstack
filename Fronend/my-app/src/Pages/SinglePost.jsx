import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
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
  } from '@chakra-ui/react';

 
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ModalComp from '../Components/ModalComp';

  

const getAllPostsDetailsById = (url) => {
    return fetch(url).then((res) => res.json());
  };

  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
    function SinglePost() {
     
        const[proData , setProData] = useState([])
        const [isModalOpen, setIsModalOpen] = useState(false);
        // console.log(proData);
        const {id} = useParams()
  
        useEffect(() => {
            getAllPostsDetailsById(`http://localhost:3001/posts/${id}`).then((res) =>
            setProData(res)
            );
          }, [id]);

          const opneModelCom = () =>{
            setIsModalOpen(true);
          }

           // just for date addition
          const dateFormat = () =>{
            let date = new Date()
            return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
          }


    return (

        <>
        
   <Box border="2px solid green" display="flex" justifyContent="flex-end" >
   <Menu  >
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Close' : 'More'}
      </MenuButton>
      <MenuList>
        <MenuItem component={Link} to={`/posts/edit/:${proData.id}`}  >Edit</MenuItem>
        <MenuItem onClick={opneModelCom}>
        <ModalComp isOpen={isModalOpen} setIsOpe={setIsModalOpen}
        title= {proData.title}
        id={id}
        />
        </MenuItem>
        
      </MenuList>
    </>
  )}
</Menu>
   </Box>

      <Center py={12}>
   
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={proData.imageFileSet}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {proData.title}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {proData.body}
            </Heading>
            <Stack direction={'row'} align={'center'}>
                
                <Text>
                    {!proData.publishedAt? dateFormat(proData.publishedAt) : null }
                </Text>

          <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text>
            </Stack>
          </Stack>
        </Box>

        
      </Center>

      </>
    );
  }

  export default SinglePost