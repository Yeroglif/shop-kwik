import { useState } from "react";

export default function CommentForm(props) {
  const { handleAddComment } = props;
  // state for comment
  const [comment, setComment] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
        type="text"
        placeholder="Write your opinion..."
        value={comment}
      />
      <button
        onClick={() => {
          handleAddComment(comment);
        }}
      >
        Send
      </button>
    </div>
  );
}
