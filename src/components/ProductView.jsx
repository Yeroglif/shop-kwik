import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function ProductView(props) {
  const { selectedProduct } = props;

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

  function handleAddComment(newComment) {
    const newComments = [...comments];
    newComments.push({
      id: newComments[newComments.length - 1].id + 1,
      productId: selectedProduct.id,
      description: newComment,
      date: formatDate(Date.now()),
    });
    setComments(newComments);
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
