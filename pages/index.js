import { useAuth } from "../lib/auth";
import { TextHeader } from "../components/header";
import {
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle, FcPicture, FcFolder } from "react-icons/fc";
import { VscUnlock } from "react-icons/vsc";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Index() {
  const auth = useAuth();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const colorMode = useColorModeValue("blue.100", "blue.700");

  return auth.user ? (
    <>
      <TextHeader />
      <Flex height="100vh" alignItems="center" justify="center">
        <Flex
          mt={-100}
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
            leftIcon={<VscUnlock />}
            onClick={() => auth.signout()}
          >
            Sign Out
          </Button>
          <Button leftIcon={<FcPicture />} onClick={toggleColorMode}>
            Color Mode
          </Button>
        </Flex>
      </Flex>
    </>
  ) : (
    <>
      <TextHeader />
      <Flex
        display="flex"
        height="100vh"
        alignItems="center"
        justify="center"
        maxHeight="60vh"
      >
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
            leftIcon={<FcGoogle />}
            align="center"
            onClick={(e) => auth.signinWithGoogle()}
          >
            Sign In
          </Button>
          <Button
            background={colorMode}
            leftIcon={<FcPicture />}
            onClick={toggleColorMode}
          >
            Color Mode
          </Button>
        </Flex>
      </Flex>
      <Flex direction="column" textAlign="center" display="flex">
        <Text>
          <Link
            color="blue.200"
            href="https://github.com/IvanMJs/imei"
            isExternal
          >
            <Icon mt={-1} as={FcFolder} /> Repo
          </Link>
        </Text>
        <Text>
          I made one just connected to{" "}
          <Link
            color="blue.200"
            href="https://social-oauth.vercel.app/"
            isExternal
          >
            Supabase <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
      </Flex>
    </>
  );
}
