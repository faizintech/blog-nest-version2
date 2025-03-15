import Post from "./Post";
const AllblogPosts = ({ postList2, onHandelDelete }) => {
  return (
    <section>
      <div className="container">
        <div className="heading-content all-blogs">
          <h2 className="all-blog-post-heading">All blog-post</h2>
          <div className="content">
            {postList2.map((post, index) => (
              <Post post={post} key={index} onHandelDelete={onHandelDelete} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AllblogPosts;
