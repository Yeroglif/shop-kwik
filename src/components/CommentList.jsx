export default function CommentList(props) {
  const { comments } = props;
  return (
    <div className="comment-container">
        {/* Actual comment list */}
      {comments.map((comment, commentIndex) => {
        return (
          <div className="comment-card" key={commentIndex}>
            <p>Date: {comment.date}</p>
            <p>{comment.description}</p>
          </div>
        );
      })}
    </div>
  );
}
