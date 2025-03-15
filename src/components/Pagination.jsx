import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Pagination = () => {
  return (
    <section>
      <div className="pagination">
        <button className="previous">
          <span className="arrow-left">
            <GrPrevious />
          </span>
          previous
        </button>
        <div className="page-numbers">
          <ul>
            <li>
              <button>1</button>
            </li>
            <li>
              <button>1</button>
            </li>
            <li>
              <button>.</button>
            </li>
            <li>
              <button>.</button>
            </li>
            <li>
              <button>.</button>
            </li>
            <li>
              <button>1</button>
            </li>
            <li>
              <button>1</button>
            </li>
          </ul>
        </div>
        <button className="nextpage">
          next{" "}
          <span className="next">
            <GrNext />
          </span>
        </button>
      </div>
    </section>
  );
};
export default Pagination;
