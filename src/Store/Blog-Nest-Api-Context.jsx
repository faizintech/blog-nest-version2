import { createContext, useEffect } from "react";
import { useState } from "react";
import { MdOutlineFormatAlignJustify } from "react-icons/md";

export const BlogNestApiContext = createContext([]);

const BlogNest = ({ children }) => {
  // this is for having state of an object of the list array

  return (
    <BlogNestApiContext.Provider value={{}}>
      {children}
    </BlogNestApiContext.Provider>
  );
};

export default BlogNest;
