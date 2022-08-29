import { useRouter } from 'next/router'
import { Heading , Highlight, Text, Button, Box, Flex, Spacer, Grid} from '@chakra-ui/react'
import Image from 'next/image'
import img from '.../public/icon'
import insta from '.../public/'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
    <p>Post: {slug}</p>
    <Flex flexDir='row' >
    <Image src={img} alt='Icon' p ='5' width= '107' height='83' objectFit='cover'/>
    <Button colorScheme='red'
              borderRadius='30'
              p={5} mt='3em'  width ='10em' height ='3.5em'>Explore Now</Button>
    
    </Flex>

    <Box bg='#E23744' alignItems='center' textAlign ='center' justify='center' >
        <Heading pt='5' pl ='5' style={{color: '#F2F2F2', 
        width: '6em', height:'4em',fontFamily: 'Poppins',
       fontWeight: '700',
       fontSize: '62px',
       lineHeight: '69px' }} >
            {Post.title}
        </Heading>
        <Text>{Post.subtitle}</Text>
        <Text>{Post.author}</Text>
    </Box>
    <Text>{Post.content}</Text>
     

     {/* footer */}

     <Flex flexDir='row' mt='3' 
   justifyContent='space-around'
   bg ='#444957'
        width={['100%', '100%' ,'100%']}  height='362' >

  <Flex width= '14em' m='10' height='8em' mt='8em'>
  <Image src={img} alt='Icon'   />
   </Flex>


   <Flex flexDir='column' mt='5em'>
   
    <Heading style={{color: 'white',
            fontWeight: '500',
            fontSize: '20px',}}>Contact Us</Heading>
            <Text alt='Icon'lineHeight='2em'>
        Lorem Ipsum Pvt, Ltd5/1, Magalton <Spacer/>Road, Phartosh Gate near YTM<Spacer/> Market, XYZ-343434
   <Spacer/>
   <Spacer/>
    example2020@gmail.com
    <Spacer/>
    <Spacer/>
    (904)443-0343
   </Text>
   </Flex>

   <Flex flexDir='column' mt='5em'>
   <Text lineHeight='4em'>
    <Heading style={{color: 'white',
            fontWeight: '500',
            fontSize: '20px',}}>More</Heading>
            <Spacer/>
        About Us
        <Spacer/>
         Products
         <Spacer/>
    Career
    <Spacer/>
    Contact Us
   </Text>
   </Flex>


   <Flex>
   
   </Flex>
   <Flex mt='5em' flexDir='column'>
   <Heading style={{color: 'white',
            fontWeight: '500',
            fontSize: '20px',}}>Social Links</Heading>
             <Flex flexDir='row' justifyContent='space-between'>
            <Image src={insta} alt='Insta'/>
            <Image src={twitter} alt='Twitte'  />
            <Image src={fb} alt='Fb'  />
            </Flex>
            <Text>2022 Food Truck example</Text>
   </Flex>
   
   </Flex>
    </>
  )
}

export default Post