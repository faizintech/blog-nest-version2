import { RxCross1 } from "react-icons/rx";
const PostCreatedMessage = ({ SetSuccessState }) => {
  return (
    <div className="PostCreatedMessage">
      <p>Your post has been created</p>
      <span onClick={SetSuccessState}>
        <RxCross1 />
      </span>
    </div>
  );
};
export default PostCreatedMessage;
