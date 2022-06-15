import { Flex, Box, Icon, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { FaReddit } from "react-icons/fa";
import { Community } from "../../atoms/communitiesAtom";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const isJoined = false;

  return (
    <Flex direction="column" width="100%" height="146px">
      <Box height="50%" bg="blue.400"></Box>
      <Flex justify="center" bg="white" flexGrow={1}>
        <Flex width="95%" maxWidth="860px" border="1px solid red">
          {communityData.imageURL ? (
            <Image></Image>
          ) : (
            <Icon
              as={FaReddit}
              fontSize={64}
              position="relative"
              top={-3}
              color="blue.500"
              border="4px solid white"
              borderRadius="90"
            ></Icon>
          )}
          <Flex padding="10px 16px">
            <Flex direction="column" mr={6}>
              <Text fontWeight={600} fontSize="16pt">
                {communityData.id}
              </Text>
              <Text fontWeight={600} fontSize="10pt" color="gray.400">
                {communityData.id}
              </Text>
            </Flex>
            <Button
              variant={isJoined ? "outline" : "solid"}
              height="25px"
              pr={6}
              pl={6}
              onClick={() => {}}
            >
              {isJoined ? "Joined" : "Join"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
