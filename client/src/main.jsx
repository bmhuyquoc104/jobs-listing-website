import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import conditionsReducer from './features/conditions'
const queryClient = new QueryClient();

// Create store using configureStore from redux toolkit
const store = configureStore({
  reducer: {
    conditions:conditionsReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      {/* Create provider to apply redux toolkit  */}
      <Provider store={store}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Provider>
    </React.StrictMode>
  </QueryClientProvider>
);
