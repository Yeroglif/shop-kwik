import { useState } from "react";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList";
import ProductView from "./components/ProductView";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Adjust path as needed


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

  const handleAddProduct = async (newProduct) => {
    try {
      // Remove `id: 0` before adding to Firestore
      const { id, ...productData } = newProduct;
  
      // Add product to Firestore
      const docRef = await addDoc(collection(db, "products"), productData);
  
      // Update the local state with Firestore-generated ID
      const savedProduct = { ...newProduct, id: docRef.id };
  
      // Ensure comments are properly assigned productId
      savedProduct.comments = savedProduct.comments.map((comment, index) => ({
        ...comment,
        id: index + 1, // Assign unique comment ID
        productId: docRef.id,
      }));
  
      setProducts([...products, savedProduct]);
  
      console.log("Product added with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
    

  function handleDeleteProduct(productToDelete) {

  }

  // function handleSaveData(currentProducts) {
  //   localStorage.setItem(
  //     "shop-kwik-products",
  //     JSON.stringify({ products: currentProducts })
  //   );
  // }

  return (
    <>
      <Layout setSelectedproduct={setSelectedproduct}>
        {!selectedProduct && (
          <ProductList
            products={products}
            setSelectedproduct={setSelectedproduct}
            handleAddProduct={handleAddProduct}
            handleDeleteProduct={handleDeleteProduct}
            setProducts={setProducts}
          />
        )}
        {selectedProduct && <ProductView selectedProduct={selectedProduct} setSelectedproduct={setSelectedproduct} />}
      </Layout>
    </>
  );
}

export default App;
