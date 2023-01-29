import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function SingleProCard({title , proImage , body}) {
  return (
    <Card
  direction={{ base: 'column', sm: 'column' , md: 'row' }}
  border={{ base: '2px solid red',  sm: '2px solid yellow' , md : "4px solid green" }}
  overflow='hidden'
  variant='outline'
 margin={{ base: 'auto', sm: 'auto'  }}
//  textAlign={{ base: 'center', sm: 'center'  }}
>
  <Image
    objectFit='cover'
    maxW={{ base: '400px', sm: '80%' , md:'450px' }}
    border={{ base: '2px solid red',  sm: '2px solid yellow' , md : "4px solid green" }}
    src={proImage}
    alt='Caffe Latte'
    margin={{ base: 'auto', sm: 'auto'  }}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
        {body}
      </Text>
    </CardBody>

    {/* <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter> */}
  </Stack>
</Card>
  )
}

export default SingleProCard