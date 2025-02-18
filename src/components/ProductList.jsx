import { useEffect, useState } from "react";
import Modal from "./Modal";
import ProductFormModal from "./ProductFormModal";
import ProductCard from "./ProductCard";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export default function ProductList(props) {
  //all props + delete(for later)
  const {
    products,
    setSelectedproduct,
    handleAddProduct,
    handleDeleteProduct,
    setProducts,
  } = props;
  // state to check if add product modal is up
  const [isAdding, setIsAdding] = useState(false);
  // Load all data from db
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="products-container">
      <button
        onClick={() => {
          setIsAdding(true);
        }}
      >
        Add product
      </button>
      {/* Modal to add product */}
      {isAdding && (
        <Modal
          handleCloseModal={() => {
            setIsAdding(false);
          }}
        >
          <ProductFormModal
            setIsAdding={setIsAdding}
            handleAddProduct={handleAddProduct}
          />
        </Modal>
      )}
      {/* Actual list to be displayed */}
      {products.map((product, productIndex) => {
        return (
          <ProductCard
            key={productIndex}
            product={product}
            setSelectedproduct={setSelectedproduct}
          />
        );
      })}
    </div>
  );
}
