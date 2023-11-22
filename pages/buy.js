// import styles from '../styles/Home.module.css'
import buy1 from "../public/buy1.png";
import buy2 from "../public/buy2.png";
import Image from "next/image";
import {
  Box,
  Heading,
  Button,
  Text,
  Flex,
  Spacer,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function Buy() {
  const breakpoints = {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  };

  return (
    <>
      <Flex
        bg="#FFFBF7"
        width={["100%", "100%", "100%"]}
        height="500"
        mt="10em"
        mb="10em"
      >
        <Box mt="10em" width="31em" ml="10" mr="5">
          <Heading
            ml="7"
            style={{ color: "#0E2368", fontWeight: "700", fontSize: "62px" }}
          >
            Buy
          </Heading>
          <Text lineHeight="7" fontSize="17px" p="6">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley.
            <Spacer />
            <Button
              colorScheme="red"
              borderRadius="30"
              p={5}
              mt="3em"
              width="10em"
              height="3.5em"
            >
              Buy Now
            </Button>
          </Text>
        </Box>

        <Grid templateColumns={["repeat(2, 1fr)"]} gap={8} ml="10" mr="5">
          <GridItem
            bg="linear-gradient(90.07deg, #E23744 30.91%, #DC3F4B 64.79%, #E95661 91.94%)"
            p="4"
            mt="10em"
            width="366"
            height="306"
            borderRadius="20.937px"
            border="1.37039px solid rgba(147, 162, 211, 0.38)"
          >
            <Image
              src={buy1}
              alt="Sauces"
              width="297"
              height="214"
              borderRadius="20px"
            />
            <Text
              color="#ffffff"
              fontSize="21px"
              fontWeight="800"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              letterSpacing="0.02em"
            >
              Dressings & Sauces
            </Text>
          </GridItem>

          <GridItem
            width="366"
            height="306"
            borderRadius="20.937px"
            border="1.37039px solid rgba(147, 162, 211, 0.38)"
            p="4"
            mt="10em"
          >
            <Image src={buy2} alt="Breakfast" width="297" height="214" />
            <Text
              color="#444957"
              fontSize="21px"
              fontWeight="800"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              letterSpacing="0.02em"
            >
              Breakfast Ideas
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
