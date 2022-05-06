import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const queryClient = new QueryClient();

const store = configureStore({
  reducer: {},
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>
);
