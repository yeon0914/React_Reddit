import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Directory from "./Directory/Directory";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justify={{ md: "space-between" }}
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
      >
        <Image src="/images/redditlogo.png" height="30px" mr={2} />
        <Image
          src="/images/reddittext.png"
          height="15px"
          display={{ base: "none", md: "unset" }} //chakra는 responsive style support함. bases는 모바일(0em이상), md는 48em 이상. 따라서 md일때 unset을 통해 display none 반대를 적용함.
        />
      </Flex>
      {user && <Directory></Directory>}
      <SearchInput user={user}></SearchInput>
      <RightContent user={user}></RightContent>
    </Flex>
  );
};
export default Navbar;
