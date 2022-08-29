import Axios from 'axios'
import {Box, Image} from '@chakra-ui/react'

   
const FoodList = ({foodData}) => {
    console.log(foodData)
    const posts = foodData.data
    return <div >
    {posts.map((post) => {
        return (
       <div>
        <Image src={post.featured_image} alt='Icon' p ='5' width= '107' height='83' objectFit='cover'/>
        <Box>{post.title}</Box>
       </div>
   )
    })}
    </div>
      
}

  

export const getStaticProps = async () =>{
    const data = await Axios.get('https://tif-react-assignment-api.herokuapp.com/blog/get-all/grilled-tomatoes-at-home  ')
    return {
        props :{
         foodData : data.data
        }
    }
}

export default FoodList;