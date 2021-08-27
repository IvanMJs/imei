import { Text, Button, Icon } from "@chakra-ui/react";
import { SiStyledComponents } from "react-icons";
import { VscSymbolColor } from "react-icons/vsc";
import { FcFlashOn, FcDatabase, FcUnlock } from "react-icons/fc";

export function TextHeader() {
  return (
    <>
      <Text align="center" fontSize="5xl" mb={6} mt={10}>
        Connected with Firebase
        <Icon as={FcFlashOn} />
      </Text>
      <Text align="center">
        Using Next.js / React Firebase Authentication <Icon mt={-1} as={FcUnlock  } /> / Firestore <Icon as={FcDatabase} />
      </Text>
      <Text align="center">and Chakra Ui{" "} <Icon as={VscSymbolColor} /></Text>
     
    </>
  );
}
//leftIcon={<SiStyledComponents />}
