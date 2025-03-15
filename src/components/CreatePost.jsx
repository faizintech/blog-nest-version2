import { useEffect, useRef, useState } from "react";
import PostCreatedMessage from "./PostCreatedMessage";
import ErrorMessage from "./ErrorMessage";

const CreatePost = ({ posts, setPost }) => {
  const [successState, SetSuccessState] = useState(false);
  // this is for adding a list in dom and local storage
  const title = useRef("");
  const image = useRef("");
  const content = useRef("");
  const tags = useRef("");

  // for authentication of the inputs
  const [error, setError] = useState("");

  const Error = (error) => {
    setError(error);
  };

  const onHandelClickSubmit = (event, title, content, tags) => {
    event.preventDefault();

    if (title.current.value == "") {
      // console.log(`title is not mentioneed`);
      Error("Title is not mentioned");
    } else if (content.current.value == "") {
      // console.log(`content has not been created`);
      Error("content has been created");
    } else if (tags.current.value == "") {
      // console.log("tags not given");
      Error("tags has not been given");
    }

    if (
      title.current.value !== "" &&
      content.current.value !== "" &&
      tags.current.value !== ""
    ) {
      //verifications of the tags if he the tags array have any false value
      const tagsData = tags.current.value.split(" ");
      const tagsArray = tagsData.filter(function (e) {
        return e;
      });

      const myObj = {
        userId: "@faizintech",
        title: title.current.value,
        body: content.current.value,
        tags: tagsArray,
      };

      setPost([myObj, ...posts]);
      SetSuccessState(true);
      title.current.value = "";
      content.current.value = "";
      tags.current.value = "";
    }
  };

  useEffect(() => {
    const data = window.localStorage.getItem("posts");
    setPost(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <>
      <div className="create-posts">
        <form>
          {successState === true && (
            <PostCreatedMessage SetSuccessState={SetSuccessState} />
          )}
          {/* title */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="contnt-title"
              ref={title}
              placeholder="Enter Title of your post"
            />
            <div id="emailHelp" className="form-text">
              {/* We'll never share your email with anyone else. */}
            </div>
          </div>
          {/* content */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Content
            </label>
            <textarea
              rows={5}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              ref={content}
              placeholder="What are you thinking today"
            />
          </div>
          {/* tags */}
          <div className="mb-3">
            <label htmlFor="tasg" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              ref={tags}
              placeholder="Enter Tags space in between e.g.,[design tech research]:"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => {
              onHandelClickSubmit(event, title, content, tags);
            }}
          >
            Posts
          </button>
          {error != "" && <ErrorMessage error={error} setError={setError} />}
        </form>
      </div>
    </>
  );
};
export default CreatePost;
