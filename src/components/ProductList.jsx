import { useEffect, useState } from "react";
import Modal from "./Modal";
import ProductFormModal from "./ProductFormModal";
import ProductCard from "./ProductCard";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase"; 

export default function ProductList(props) {
    const {products, setSelectedproduct, handleAddProduct, handleDeleteProduct, setProducts} = props

  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productList = snapshot.docs.map((doc) => ({
        id: doc.id, // Firestore document ID
        ...doc.data(), // Other product fields
      }));
      setProducts(productList);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setIsAdding(true);
        }}
      >
        Add product
      </button>
      {isAdding && (
        <Modal
          handleCloseModal={() => {
            setIsAdding(false);
          }}
        >
          <ProductFormModal setIsAdding={setIsAdding} handleAddProduct={handleAddProduct} />
        </Modal>
      )}
      {products.map((product, productIndex)=>{
        return (
            <ProductCard key={productIndex} product={product} setSelectedproduct={setSelectedproduct}/>
        )
      })}
    </div>
  );
}
