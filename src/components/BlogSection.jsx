import RecentBlogPosts from "./RecentBlogPosts";
import AllblogPosts from "./AllBlogPosts";
import { useState } from "react";
const BlogSection = ({ filteredPost, onHandelDelete }) => {
  let postList1 = [];
  let postList2 = [];
  let limit = 4;
  if (filteredPost.length < 4) {
    postList2 = filteredPost;
  } else {
    postList1 = filteredPost.slice(0, limit);
    postList2 = filteredPost.slice(limit, limit + filteredPost.length);
  }

  return (
    <div className="blog">
      <RecentBlogPosts postList1={postList1} onHandelDelete={onHandelDelete} />

      {/* {filteredPost.length > 4 && <RecentBlogPosts postList1={postList1} onHandelDelete={onHandelDelete}/>} */}

      <AllblogPosts postList2={postList2} onHandelDelete={onHandelDelete} />
    </div>
  );
};
export default BlogSection;
