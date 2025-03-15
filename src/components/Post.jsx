import { MdArrowOutward } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import Tag from "./Tag";
const Post = ({ post, onHandelDelete }) => {
  return (
    <div className="blog-post-card">
      <div className="img"></div>
      <div className="card-content">
        <div className="headin-text">
          <p className="author">
            {post.userId}
            <span className="delete" onClick={() => onHandelDelete(post.title)}>
              Delete
            </span>
          </p>
          <div className="heading-icon">
            <h2>{post.title}</h2>
            <span className="icon-wrapper">
              <MdArrowOutward />
            </span>
          </div>
          <p className="supporting-text">{post.body}</p>
        </div>
        <div className="categories">
          {post.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Post;
