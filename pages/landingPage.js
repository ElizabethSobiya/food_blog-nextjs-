// import Start from "./about"
import styles from '../styles/Home.module.css'
import { Heading , Highlight, Text, Button, Box, Flex, Spacer, Grid} from '@chakra-ui/react'
import Image from 'next/image'
// import Food from './images/Rectangle 400.png'
import img from '../public/icon.jpg'
import pizza from '../public/pizza.png'
import vector from '../public/vector.png'



export default function LandingPage() {
  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }

  

    return (
        <>
        <Flex width={['100%', '100%' ,'100%' ]}  height ='604' justify='space-between' flexdir={['column', 'column', 'column' , 'row-reverse']}>
          <Flex flexdir={['column', 'column', 'column' , 'column']} width={['100%', '100%' ,'50%' ]}>
       <Box pt='8' pl ='9'>
        <Flex display={['flex', 'flex' , 'flex' , null]}> 
        <Image src={img} alt='Icon' p ='5' width= '107' height='83' objectFit='cover' /></Flex>
        <Heading pt='5' pl ='5' style={{color: '#0E2368', 
        width: '6em', height:'4em',fontFamily: 'Source Sans Pro',
       fontWeight: '700',
       fontSize: '62px',
       lineHeight: '69px' }}>
        <Highlight
         query='Best'
          styles={{ color: '#E23744' }}>
            Discover the 
            Best Food 
            and Drinks
            </Highlight>
            </Heading>
              <Text  width= '19em' ml= '1.5em' > Naturally made Healthcare Products for the better care & support of your body</Text>
              <Button colorScheme='red'
              borderRadius='30'
              p={5} ml= '1.5em' mt= '2em' width ='10em' height ='3.5em'
              >Explore Now!</Button>
         </Box>
         </Flex>
         {/* <Spacer/> */}
          
      
       <Flex flexdir={['column', 'column', 'column' , 'column']} width={['100%', '100%' ,'50%' ]}>
       <Box display='flex'   h='720' width={['100%', '100%' ,'100%']}>
     
          <Image src={vector}  h='740' alt='vector'  bg ='#E23744'
           style={{
            backgroundImage: `url(${pizza.src})`,
            width: '80%',
            height: '80%',
            backgroundRepeat: "no-repeat"}} 
          />
          {/* <Button borderRadius='12%' position='absoulte' left='-200' top='0' zIndex='2' border='1px solid white'>Get in Touch</Button> */}
         </Box>
         </Flex>
      
        </Flex>
        </>
    )
  }
  