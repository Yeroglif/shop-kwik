import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function ProductView(props) {
  const { selectedProduct, setSelectedproduct } = props;
  // state for all comments
  const [comments, setComments] = useState(selectedProduct.comments);
  // date formatter to display it like 18.02.2025, 13:00
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  // adding comment to product state and db
  async function handleAddComment(newComment) {
    if (!selectedProduct) return;

    const newCommentObj = {
      id: comments.length > 0 ? comments[comments.length - 1].id + 1 : 1,
      productId: selectedProduct.id,
      description: newComment,
      date: formatDate(Date.now()),
    };

    // Update db
    const productRef = doc(db, "products", selectedProduct.id);
    try {
      await updateDoc(productRef, {
        comments: [...selectedProduct.comments, newCommentObj],
      });

      // Update products state
      setComments((prev) => [...prev, newCommentObj]);
      setSelectedproduct((prev) => ({
        ...prev,
        comments: [...prev.comments, newCommentObj],
      }));
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  }

  return (
    <div className="product-view">
      <div className="product-view-card">
        <h2>{selectedProduct.name}</h2>
        <img src={selectedProduct.imageUrl} />
        <p>Count: {selectedProduct.count}</p>
        <p>
          Width: {selectedProduct.size.width}, Height:{" "}
          {selectedProduct.size.height}
        </p>
        <p>Weight: {selectedProduct.weight}</p>
        <h3>Comments:</h3>
      </div>
      {/* Comments */}
      <CommentForm handleAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
}
