import { useState } from "react";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList";
import ProductView from "./components/ProductView";

function App() {
  const [selectedProduct, setSelectedproduct] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      imageUrl: "some url here",
      name: "Product name",
      count: 4,
      size: {
        width: 200,
        height: 200,
      },
      weight: "200g",
      comments: ["CommentModel", "CommentModel"],
    },
  ]);

  function handleAddProduct(newProduct) {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    handleSaveData(newProducts);
  }

  function handleSaveData(currentProducts) {
    localStorage.setItem(
      "shop-kwik-products",
      JSON.stringify({ products: currentProducts })
    );
  }

  return (
    <>
      <Layout>
        {!selectedProduct.trim() && <ProductList products={products} />}
        {selectedProduct.trim() && <ProductView />}
      </Layout>
    </>
  );
}

export default App;
