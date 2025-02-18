import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function ProductView(props) {
  const { selectedProduct, setSelectedproduct } = props;

  const [comments, setComments] = useState(selectedProduct.comments);

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  async function handleAddComment(newComment) {
    if (!selectedProduct) return;
  
    const newCommentObj = {
      id: comments.length > 0 ? comments[comments.length - 1].id + 1 : 1, // Ensure unique ID
      productId: selectedProduct.id,
      description: newComment,
      date: formatDate(Date.now()),
    };
  
    // Update Firestore
    const productRef = doc(db, "products", selectedProduct.id);
    try {
      await updateDoc(productRef, {
        comments: [...selectedProduct.comments, newCommentObj], // Append new comment
      });
  
      // Update local state
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
    <div>
      <h2>{selectedProduct.name}</h2>
      <img src={selectedProduct.imageUrl} />
      <p>Count: {selectedProduct.count}</p>
      <p>
        Width: {selectedProduct.size.width}, Height:{" "}
        {selectedProduct.size.height}
      </p>
      <p>Weight: {selectedProduct.weight}</p>
      <h3>Comments:</h3>
      <CommentForm handleAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
}
