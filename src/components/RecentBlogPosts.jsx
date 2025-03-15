import { MdArrowOutward } from "react-icons/md";
import Post from "./Post";
const RecentBlogPosts = ({ postList1, onHandelDelete }) => {
  return (
    <section>
      <div className="container">
        {postList1.length > 3 && <h2 className="heading">Recent blog posts</h2>}
        <div className="content grid-content">
          {postList1.map((post, index) => (
            <Post post={post} key={index} onHandelDelete={onHandelDelete} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RecentBlogPosts;
