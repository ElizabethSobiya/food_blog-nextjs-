// import Axios from 'axios'
import {Box, Flex, Heading, Grid, GridItem, Text, Button} from '@chakra-ui/react'
import Image from 'next/image'
import tomatoes from '../public/tomatoes.png'
import meal from '../public/meal.png'
import meal2 from '../public/meal2.png'
import Link from 'next/link'



import React from 'react'

function Articles() {
  return (
    <>
    <Heading mt='2em' ml ='20'style={{color: '#0E2368',
            fontWeight: '700',
            fontSize: '62px',}}>Latest Articles 
         </Heading>
         <Grid templateColumns='repeat(3, 1fr)' gap={5} m ='4em' height='554' w= '381'>
        <GridItem border ='1.37039px solid rgba(147, 162, 211, 0.38)' borderRadius='21px' p='7'>
        <Image src={tomatoes} alt='GrilledTomatoes'  w='300' height='257'  />
        <Heading mt='3' style={{color: '#0E2368',
            fontWeight: '700',
            fontSize: '20px',}}>Grilled Tomatoes at Home
         </Heading>
         <Text mt='4' pr='2'>
         Lorem ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been industry's
            standard 
         </Text>
         <Link href="/blog/">
         <Button color='#424961' colorScheme='white'
              border='1px solid #424961' borderRadius='21px'
              p={5} ml= '1.5em' mt= '2em' width ='10em' height ='3.5em'>Read More</Button>
              </Link>
        </GridItem>


        <GridItem   border ='1.37039px solid rgba(147, 162, 211, 0.38)'p='7'  borderRadius='21px'>
        <Image src={meal} alt='Meal-prep' w='326' height='257' />
        <Heading mt='3' style={{color: '#0E2368',
            fontWeight: '700',
            fontSize: '20px',}}>Snack for Travel 
         </Heading>
         <Text mt='4' pr='2'>
         Lorem ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been industry's
            standard 
         </Text>
         <Link href="/blog/">
         <Button color='#424961' colorScheme='white'
              border='1px solid #424961' borderRadius='21px'
              p={5} ml= '1.5em' mt= '2em' width ='10em' height ='3.5em'>Read More</Button>
               </Link>
        </GridItem>


        <GridItem border ='1.37039px solid rgba(147, 162, 211, 0.38)' borderRadius='21px' p='7'>
        <Image src={meal2} alt='Meal-prep-green' w='326' height='257' />
        <Heading mt='3' style={{color: '#0E2368',
            fontWeight: '700',
            fontSize: '20px',}}>Post-workout Recipes 
         </Heading>
         <Text mt='4' pr='2'>
         Lorem ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been industry's
            standard 
         </Text>
         <Link href="/blog/">
         <Button color='#424961' colorScheme='white'
              border='1px solid #424961' borderRadius='21px'
              p={5} ml= '1.5em' mt= '2em' width ='10em' height ='3.5em'>Read More</Button>
               </Link>
        </GridItem>
    </Grid>
    </>
  )
}

export default Articles




// const Articles = ({foodData}) => {
//     console.log(foodData)
//     const posts = foodData.data
//     return <div >
//     {posts.map((post) => {
//         return (
//        <>
//         <Image src={post.featured_image} alt='Icon' p ='5' width= '107' height='83' objectFit='cover'/>
//         <Box>{post.title}</Box>
//        </>
//    )
//     })}
//     </div>
      
// }

  

// export const getStaticProps = async () =>{
//     const data = await Axios.get('https://tif-react-assignment-api.herokuapp.com/blog/get-all')
//     console.log(data)
//     return {
//         props :{
//          foodData : data.data
//         }
//     }
// }

// export default Articles;