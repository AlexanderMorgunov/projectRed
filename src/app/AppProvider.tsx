import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../shared/store";
import { BrowserRouter } from "react-router-dom";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
