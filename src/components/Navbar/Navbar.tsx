import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center" gap={2}>
        <Image src="/images/redditlogo.png" height="30px" />
        <Image
          src="/images/reddittext.png"
          height="15px"
          display={{ base: "none", md: "unset" }} //chakra는 responsive style support함. bases는 모바일(0em이상), md는 48em 이상. 따라서 md일때 unset을 통해 display none 반대를 적용함.
        />
      </Flex>
      {/* <Directory></Directory> */}
      <SearchInput></SearchInput>
      {/* <RightContent></RightContent> */}
    </Flex>
  );
};
export default Navbar;
