// import styles from '../styles/Home.module.css'
import abt from '../public/about.png'
import Image from 'next/image'
import { Box, Heading, Button, Text, Flex, Spacer, Grid} from '@chakra-ui/react'



export default function About() {
    return (
      <>
        <Flex bg ='linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);'
        width={['100%', '100%' ,'100%']} height ='467'
          mt='13em'>
        <Grid display={['flex','flex','flex' ,null]}>
        <Box ml='150' > 
        <Image src={abt} alt='About' width ='384' height='468'/>
        </Box>
        </Grid>

        <Spacer/>

        <Flex  display={['flex' , 'flex']} width={['100%' ,'100%' , '50%']}  >
        <Box m='10' p='5' width='35em'>
        <Heading p='5' style={{color: '#0E2368',
            fontWeight: '700',
            fontSize: '62px',}}>About Us
         </Heading>
          <Text  p='5' lineHeight='7' fontSize= '17px'>
            Lorem ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been industry's
            standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type speciemen book. It has survived not only five centuries.
            </Text>
            <Button colorScheme='red'
              borderRadius='30'
              p={5} ml= '1.5em' mt= '2em' width ='10em' height ='3.5em'>Read More</Button>
        </Box>
        </Flex>
        </Flex>
      </>
    )
  }
  