import React, { Component } from "react";
import { Flex, Image, List, ListItem, Icon } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { BiUser, BiSearch, BiShoppingBag } from "react-icons/bi";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Flex bg="white" minH={80} px={50} py={18}>
        <List
          styleType="none"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          fontSize="0.8em"
          w="80%"
          fontWeight="500"
          w="45%"
          m={0}
          p={0}
        >
          <ListItem mx="2%" my={3}>
            <Link to="/">HOME</Link>
          </ListItem>
          <ListItem mx="2%" my={3}>
            <Link to="/collection/all">SHOP</Link>
          </ListItem>
          <ListItem mx="2%" my={3}>
            <Link to="/about">ABOUT</Link>
          </ListItem>
          <ListItem mx="2%" my={3} wordBreak="keep-all">
            <Link to="/the-teagram">THE TEAGRAM</Link>
          </ListItem>
          <ListItem mx="2%" my={3}>
            <Link to="/faq">FAQ</Link>
          </ListItem>
          <ListItem mx="2%" my={3}>
            <Link to="/contact-us">CONTACT US</Link>
          </ListItem>
        </List>
        <Link w="10%" to="/">
          <Image
            size=""
            objectFit="cover"
            src="https://cdn.shopify.com/s/files/1/0287/1620/4135/files/Logo_1200X628_Transparent_e2260294-1e92-4cce-bcc4-097f0bc4ca24_110x.png?v=1594688645"
            alt="rujani tea logo"
          />
        </Link>
        <Flex
          w="45%"
          justifyContent="flex-end"
          color="gray"
          alignItems="center"
        >
          <Flex>
            <Link to="/account">
              <Icon as={BiUser} size={6} mr={3} />
            </Link>
            <Link to="/search">
              <Icon as={BiSearch} size={6} mr={3} />
            </Link>
            <Link to="/cart">
              <Icon as={BiShoppingBag} size={6} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default Header;
