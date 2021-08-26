import { AuthProvider } from "../lib/auth";
import { ChakraProvider } from "@chakra-ui/react";
const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
