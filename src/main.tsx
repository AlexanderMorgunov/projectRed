import ReactDOM from "react-dom/client";
import { AppProvider } from "./app/AppProvider";
import { App } from "./app/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <App />
  </AppProvider>
);
