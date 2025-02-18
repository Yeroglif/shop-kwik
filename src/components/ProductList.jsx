import { useState } from "react";
import Modal from "./Modal";
import ProductFormModal from "./ProductFormModal";
import ProductCard from "./ProductCard";

export default function ProductList(props) {
    const {products, setSelectedproduct} = props

  const [isAdding, setIsAdding] = useState(false);
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
          <ProductFormModal />
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
