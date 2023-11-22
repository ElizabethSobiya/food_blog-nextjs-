import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

// export const getStaticProps = async () =>{
//   const data = await Axios.get('https://tif-react-assignment-api.herokuapp.com/blog/get-all')
//   console.log(data)
//   return {
//       props :{
//        foodData : data.data
//       }
//   }
// }
