import { Header } from "../../components/Header/Header";
import { Products } from "../../components/Products/Products";

export const AllItems = () => {
  return (
    <>
      <header style={{ display: "flex", justifyContent: "center" }}>
        <Header />
      </header>
      <Products />
    </>
  );
};
