import { Heading , Highlight, Text, Button, Box, Flex, Spacer, Grid} from '@chakra-ui/react'
import Image from 'next/image'
import img from '../public/icon.jpg'
import insta1 from '../public/insta.png'
import  twitter1 from '../public/twt.png'
import fb1 from '../public/fbook.png'


function Footer() {
  return (
   <>
   <Flex flexDir='row' mt='3' 
   justifyContent='space-around'
   bg ='linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);'
        width={['100%', '100%' ,'100%']}  height='362' >

  <Flex width= '14em' m='10' height='8em' mt='8em'>
  <Image src={img} alt='Icon'   />
   </Flex>


   <Flex flexDir='column' mt='5em'>
   <Text alt='Icon'lineHeight='2em'>
    <Heading style={{color: '#0E2368',
            fontWeight: '500',
            fontSize: '20px',}}>Contact Us</Heading>
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
    <Heading style={{color: '#0E2368',
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
   <Flex mt='5em' flexDir='column' justify='space-between' >
   <Heading style={{color: '#0E2368',
            fontWeight: '500',
            fontSize: '20px',}}>Social Links</Heading>
            <Flex flexDir='row' justifyContent='space-between'>
            <Image src={insta1} alt='Insta'  bg='#0E2368'  />
            <Image src={twitter1} alt='Twitte' bg='#0E2368'  />
            <Image src={fb1} alt='Fb' bg='#0E2368'  />
            </Flex>
            <Flex>
            <Text > &copy;  2022 Food Truck example</Text></Flex>
   </Flex>
   
   </Flex>
  
   </>
  )
}

export default Footer