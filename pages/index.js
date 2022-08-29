import LandingPage from './landingPage'
import About from './about'
import Articles from './articles'
// import FoodList from './blogData/index'
import Buy from './buy'
import Footer from './footer'
// import Axios from 'axios'


export default function Home() {
  // const posts = foodData.data
  return (   
    <>
     <LandingPage/>
     <About/>
     <Articles />
     <Buy/>
     <Footer/>
    </>
  )
}

// export const getStaticProps = async () =>{
//   const data = await Axios.get('https://tif-react-assignment-api.herokuapp.com/blog/get-all')
//   return {
//       props :{
//        foodData : data.data
//       }
//   }
// }