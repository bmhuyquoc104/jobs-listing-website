import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import jobsReducer from "./features/job";
const queryClient = new QueryClient();

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Provider>
    </React.StrictMode>
  </QueryClientProvider>
);
