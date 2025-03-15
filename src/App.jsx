import "./App.css";
import Header from "./components/Header";
import BlogSection from "./components/BlogSection";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Page from "../src/components/Page";
import BlogNest from "../src/Store/Blog-Nest-Api-Context";
import CreatePost from "./components/CreatePost";
import { useContext, useEffect, useState } from "react";
import { BlogNestApiContext } from "../src/Store/Blog-Nest-Api-Context";

function App() {
  // ----------------For Setting the Post --------------
  const [posts, setPost] = useState([]);
  useState(() => {
    const Data = JSON.parse(window.localStorage.getItem("posts"));
    setPost(Data);
  }, []);

  // for the active toggle
  const [activeToggle, setToggle] = useState("light");

  // for hamburger----------------------
  const [Hamburger, setHamburger] = useState("close");
  const onHandelHamburger = () => {
    if (Hamburger === "close") {
      setHamburger("open");
    } else {
      setHamburger("close");
    }
  };

  // this is for the the toggle between blog and create blog-------------
  const [createState, setCreateState] = useState("blog");
  const onCreateHandelClick = (clickedBtn) => {
    setCreateState(clickedBtn);
    setHamburger("close");
  };

  // for deleting the content --------------------------
  const onHandelDelete = (postTitle) => {
    const Data = posts.filter((post) => post.title !== postTitle);
    setPost(Data);
  };

  useEffect(() => {
    window.localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // this function id for the customisation of the catefories--------------------------
  const [category, setCategory] = useState("All");
  useEffect(() => setCreateState("Blog"), [category]);
  useEffect(() => setHamburger("close"), [category]);
  // for show casing the postscons
  const filteredPost = posts.filter(
    (post) =>
      (category === "All" && post) ||
      post.title.toLowerCase().includes(category.toLocaleLowerCase()) ||
      post.body.toLowerCase().includes(category.toLocaleLowerCase()) ||
      post.tags.join().toLowerCase().includes(category.toLocaleLowerCase())
  );

  return (
    <BlogNest>
      <Page activeToggle={activeToggle}>
        <Header
          onCreateHandelClick={onCreateHandelClick}
          onHandelHamburger={onHandelHamburger}
          Hamburger={Hamburger}
          setCategory={setCategory}
          activeToggle={activeToggle}
          setToggle={setToggle}
        />

        <div className="main" style={{ minHeight: "100vh" }}>
          {createState === "Create Blog" ? (
            <CreatePost posts={posts} setPost={setPost} />
          ) : (
            <BlogSection
              filteredPost={filteredPost}
              posts={posts}
              setPost={setPost}
              onHandelDelete={onHandelDelete}
            />
          )}
        </div>

        {/* pagination */}
        {/* <Pagination /> */}
        {/* footer */}
        <Footer />
      </Page>
    </BlogNest>
  );
}

export default App;
