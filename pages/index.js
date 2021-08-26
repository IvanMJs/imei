import { useAuth } from "../lib/auth";
import { TextHeader } from "../components/header";
import {
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function Index() {
  const auth = useAuth();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return auth.user ? (
    <>
      <TextHeader />
      <Flex height="100vh" alignItems="center" justify="center">
        <Flex
          mt={-350}
          direction="column"
          background={formBackground}
          p={12}
          rounded={6}
        >
          <Text align="center" fontSize="2xl" mb={6}>
            Hello! {auth.user.name}
          </Text>
          <Button
            mb={3}
            colorScheme="teal"
            align="center"
            onClick={() => auth.signout()}
          >
            Sign Out
          </Button>
          <Button onClick={toggleColorMode}>Color Mode</Button>
        </Flex>
      </Flex>
    </>
  ) : (
    <>
      <TextHeader />
      <Flex mt={-200} height="100vh" alignItems="center" justify="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading align="center" mb={6}>
            Log In
          </Heading>
          <Button
            mb={3}
            colorScheme="teal"
            leftIcon={<FaGithub />}
            align="center"
            onClick={() => auth.signinWithGitHub()}
          >
            Sign In
          </Button>
          <Button
            mb={3}
            colorScheme="teal"
            leftIcon={<FaGoogle />}
            align="center"
            onClick={(e) => auth.signinWithGoogle()}
          >
            Sign In
          </Button>
          <Button onClick={toggleColorMode}>Color Mode</Button>
        </Flex>
      </Flex>
    </>
  );
}
