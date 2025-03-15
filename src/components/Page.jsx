import { useContext } from "react";
import { BlogNestApiContext } from "../Store/Blog-Nest-Api-Context";

const Page = ({ children, activeToggle }) => {
  return (
    <div className={`main-page ${activeToggle}`} data-theme={activeToggle}>
      {children}
    </div>
  );
};
export default Page;
