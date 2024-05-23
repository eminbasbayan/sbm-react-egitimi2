import ReactDOM from "react-dom/client";
import store from "./redux/store";
import App from "./App";
import "./index.css";
import CartProvider from "./context/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <CartProvider>
    <App />
  </CartProvider>
  // </React.StrictMode>
);
