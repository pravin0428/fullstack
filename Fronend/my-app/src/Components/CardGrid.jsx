import { Box, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
 
// import { ModalComponent } from "./ModalComponent";
  
 
  export default function CardGrid({ proImage ,  title , dis }) {
    return (
        <SimpleGrid columns={[1, 2, 4, 5, 6]} spacing={10}>
     
            return (
              <Box >
                <Stack>
                  <Text> {title} </Text>
                  <Img boxSize="10rem" src={proImage} />
                   <Text> {dis} </Text>
                </Stack>
              </Box>
            );
    
        {/* <ModalComponent
          data={selectedBox}
          isOpen={isModalVisible}
          setIsOpen={setIsModalVisible}
        /> */}
      </SimpleGrid>
    );
  }
  