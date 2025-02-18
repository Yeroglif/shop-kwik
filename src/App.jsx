import { useState } from "react";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList";
import ProductView from "./components/ProductView";

function App() {
  const [selectedProduct, setSelectedproduct] = useState(null);
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
      comments: [
        {
          id: 3,
          productId: 1,
          description: "some text here",
          date: "14:00 22.08.2021",
        },
        {
          id: 3,
          productId: 1,
          description: "some text here",
          date: "14:00 22.08.2021",
        },
      ],
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
      <Layout setSelectedproduct={setSelectedproduct}>
        {!selectedProduct && (
          <ProductList
            products={products}
            setSelectedproduct={setSelectedproduct}
          />
        )}
        {selectedProduct && <ProductView selectedProduct={selectedProduct} />}
      </Layout>
    </>
  );
}

export default App;
