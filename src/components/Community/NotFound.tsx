import { Flex, Link, Button } from "@chakra-ui/react";
import React from "react";

const CommunityNotFound: React.FC = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      Sorry, that community does not exist or has been banned
      <Link href="/">
        <Button mt={4}>Go Home</Button>
      </Link>
    </Flex>
  );
};
export default CommunityNotFound;
