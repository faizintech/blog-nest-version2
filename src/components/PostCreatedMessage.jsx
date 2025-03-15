const PostCreatedMessage = ({ SetSuccessState }) => {
  return (
    <div className="PostCreatedMessage">
      <p style={{ textAlign: "center" }}>your post has been created</p>
      <button onClick={() => SetSuccessState(false)}>Click me</button>
    </div>
  );
};
export default PostCreatedMessage;
