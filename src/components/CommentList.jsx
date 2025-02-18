export default function CommentList(props) {
    const {comments} = props
    return (
        <div>
            {comments.map((comment, commentIndex)=>{
                return (
                    <div key={commentIndex}>
                        <p>Date: {comment.date}</p>
                        <p>{comment.description}</p>
                    </div>
                )
            })}
        </div>
    )
}