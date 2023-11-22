import { useRouter } from "next/router";
import {
  Heading,
  Highlight,
  Text,
  Button,
  Box,
  Flex,
  Spacer,
  Grid,
} from "@chakra-ui/react";
import Image from "next/image";
import img from "./icon.jpg";
import insta from "./Path 3.png";
import twitter from "./Path 2.png";
import fb from "./Path 1.png";
import Axios from "axios";

const Post = () => {
  // const router = useRouter()
  //   const { slug } = router.query
  // console.log(foodData)
  //     const posts = foodData
  //     return <div >
  //     {posts.map((post) => {
  return (
    <>
      {/* <p>Post: {slug}</p> */}
      <Flex flexDir="row" justify="space-between" w="100%" bg="#F0F1F7">
        <Image
          src={img}
          alt="Icon"
          p="5"
          width="107"
          height="83"
          bg="#F0F1F7"
        />
        <Button
          colorScheme="red"
          borderRadius="30"
          p={5}
          mt="2em"
          ml="3"
          width="125"
          height="43"
        >
          Explore Now
        </Button>
      </Flex>

      <Box
        bg="#E23744"
        alignItems="center"
        textAlign="center"
        justify="center"
        p="10"
      >
        <Heading
          p="10"
          style={{
            color: "#F2F2F2",
            height: "4em",
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "62px",
            lineHeight: "60px",
          }}
        >
          {/* {post.data.title} */}
          Grilled Tomatoes at Home
          <Text color="white" fontSize="16px">
            Make the delicious Grilled Tomatoes in 50 minutes
          </Text>
        </Heading>

        <Text color="white">By Monica Geller</Text>
      </Box>
      <Text p="7em" lineHeight="8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        voluptatibus debitis nostrum veniam ea consequuntur labore consectetur
        impedit, beatae commodi, fuga cupiditate doloremque eveniet non et. Illo
        pariatur sed reiciendis! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cum sit enim, quod, ratione accusantium neque quisquam
        quibusdam voluptas libero tenetur voluptate labore debitis nostrum
        reiciendis. A dolorem doloribus vero ad. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium voluptatibus debitis nostrum
        veniam ea consequuntur labore consectetur impedit, beatae commodi, fuga
        cupiditate doloremque eveniet non et. Illo pariatur sed reiciendis!
        <Spacer />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit enim,
        quod, ratione accusantium neque quisquam quibusdam voluptas libero
        tenetur voluptate labore debitis nostrum reiciendis. A dolorem doloribus
        vero ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium voluptatibus debitis nostrum veniam ea consequuntur labore
        consectetur impedit, beatae commodi, fuga cupiditate doloremque eveniet
        non et. Illo pariatur sed reiciendis! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Cum sit enim, quod, ratione accusantium
        neque quisquam quibusdam voluptas libero tenetur voluptate labore
        debitis nostrum reiciendis. A dolorem doloribus vero ad. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus
        debitis nostrum veniam ea consequuntur labore consectetur impedit,
        beatae commodi, fuga cupiditate doloremque eveniet non et. Illo pariatur
        sed reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cum sit enim, quod, ratione accusantium neque quisquam quibusdam
        voluptas libero tenetur voluptate labore debitis nostrum reiciendis. A
        dolorem doloribus vero ad. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Praesentium voluptatibus debitis nostrum veniam ea
        consequuntur labore consectetur impedit, beatae commodi, fuga cupiditate
        doloremque eveniet non et. Illo pariatur sed reiciendis!
        <Spacer />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit enim,
        quod, ratione accusantium neque quisquam quibusdam voluptas libero
        tenetur voluptate labore debitis nostrum reiciendis. A dolorem doloribus
        vero ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium voluptatibus debitis nostrum veniam ea consequuntur labore
        consectetur impedit, beatae commodi, fuga cupiditate doloremque eveniet
        non et. Illo pariatur sed reiciendis! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Cum sit enim, quod, ratione accusantium
        neque quisquam quibusdam voluptas libero tenetur voluptate labore
        debitis nostrum reiciendis. A dolorem doloribus vero ad.
      </Text>

      {/* footer */}

      <Flex
        flexDir="row"
        mt="3"
        justifyContent="space-around"
        bg="#444957"
        width={["100%", "100%", "100%"]}
        height="362"
        color="white"
      >
        <Flex width="14em" m="10" height="8em" mt="8em" bg="#444957">
          <Box
            style={{
              backgroundImage: `url(${img.src})`,
              width: "80%",
              height: "80%",
              backgroundRepeat: "no-repeat",
              Color: "#444957",
            }}
          />
        </Flex>

        <Flex flexDir="column" mt="5em">
          <Text alt="Icon" lineHeight="2em">
            <Heading
              style={{ color: "white", fontWeight: "500", fontSize: "20px" }}
            >
              Contact Us
            </Heading>
            Lorem Ipsum Pvt, Ltd5/1, Magalton <Spacer />
            Road, Phartosh Gate near YTM
            <Spacer /> Market, XYZ-343434
            <Spacer />
            <Spacer />
            example2020@gmail.com
            <Spacer />
            <Spacer />
            (904)443-0343
          </Text>
        </Flex>

        <Flex flexDir="column" mt="5em">
          <Text lineHeight="4em">
            <Heading
              style={{ color: "white", fontWeight: "500", fontSize: "20px" }}
            >
              More
            </Heading>
            <Spacer />
            About Us
            <Spacer />
            Products
            <Spacer />
            Career
            <Spacer />
            Contact Us
          </Text>
        </Flex>
        <Flex></Flex>
        <Flex mt="5em" flexDir="column">
          <Heading
            style={{ color: "white", fontWeight: "500", fontSize: "20px" }}
          >
            Social Links
          </Heading>
          <Flex flexDir="row" mt="10" justifyContent="space-between">
            <Image src={insta} alt="Insta" />
            <Image src={twitter} alt="Twitte" />
            <Image src={fb} alt="Fb" />
          </Flex>
          <Spacer />
          <Flex color="828B9C">
            <Text mb="10"> &copy; 2022 Food Truck example</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
  // })}
  // </div>
};

export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://tif-react-assignment-api.herokuapp.com/blog/get-all/"
  );
  console.log(data);
  return {
    props: {
      foodData: data.data,
    },
  };
};

export default Post;
