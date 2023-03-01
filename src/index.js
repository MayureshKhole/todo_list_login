import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>
);
