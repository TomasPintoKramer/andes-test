import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme.js";
import { Provider } from "react-redux";
import store from "../state/store";
import Navbar from "../Components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={customTheme}>
        <Provider store={store}>
          <Navbar />
          <Component  {...pageProps} />
        </Provider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
