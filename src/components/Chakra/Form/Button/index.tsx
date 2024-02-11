import { Button, HStack } from "@chakra-ui/react";
// import { EmailIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const ButtonComponent = () => {
  return (
    <HStack>
      <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
        Facebook
      </Button>
      <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
        Twitter
      </Button>
    </HStack>
  );
};

export default ButtonComponent;
