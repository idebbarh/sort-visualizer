import logo from "../images/sort-logo.svg";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header--logo">
        <div className="logo--icon">
          <img src={logo} alt="sort logo" />
        </div>
        <span className="logo--text">sort visualizer</span>
      </div>
      <div className="array-setting">
        <label htmlFor="array-length">Size Of Array</label>
        <input
          type="range"
          name="array-length"
          id="array-length"
          className="array-length"
          value={props.lengthOfArray}
          onChange={(event) => props.handleArrayLength(event)}
          min="10"
          max="100"
        />
      </div>
      <div className="header--btns">
        <button
          className={`btn btns--start-sort ${props.isAlgoRunning && "disable"}`}
          onClick={props.sortAlgo !== null ? props.startSorting : undefined}
        >
          {props.sortAlgo === null ? "Pick an Algorithm!" : "Sort"}
        </button>
        <button
          className={`btn btns--merge-sort ${
            props.sortAlgo === "merge-sort" ? "active" : ""
          } ${props.isAlgoRunning && "disable"}`}
          data-algo-name="merge-sort"
          onClick={props.selectSortAlgo}
        >
          Merge Sort
        </button>
        <button
          className={`btn btns--quick-sort ${
            props.sortAlgo === "quick-sort" ? "active" : ""
          } ${props.isAlgoRunning && "disable"}`}
          data-algo-name="quick-sort"
          onClick={props.selectSortAlgo}
        >
          Quick Sort
        </button>
        <button
          className={`btn btns--heap-sort ${
            props.sortAlgo === "heap-sort" ? "active" : ""
          } ${props.isAlgoRunning && "disable"}`}
          data-algo-name="heap-sort"
          onClick={props.selectSortAlgo}
        >
          Heap Sort
        </button>
        <button
          className={`btn btns--bubble-sort ${
            props.sortAlgo === "bubble-sort" ? "active" : ""
          } ${props.isAlgoRunning && "disable"}`}
          data-algo-name="bubble-sort"
          onClick={props.selectSortAlgo}
        >
          Bubble Sort
        </button>
        <button
          className={`btn btns--insertion-sort ${
            props.sortAlgo === "insertion-sort" ? "active" : ""
          } ${props.isAlgoRunning && "disable"}`}
          data-algo-name="insertion-sort"
          onClick={props.selectSortAlgo}
        >
          Insertion Sort
        </button>
        <button
          className={`btn btns--selection-sort ${
            props.sortAlgo === "selection-sort" ? "active" : ""
          } ${props.isAlgoRunning && "disable"}`}
          data-algo-name="selection-sort"
          onClick={props.selectSortAlgo}
        >
          Selection Sort
        </button>
        <button
          className={`btn btns--shell-sort ${
            props.sortAlgo === "shell-sort" ? "active" : ""
          } ${props.isAlgoRunning && "disable"}`}
          data-algo-name="shell-sort"
          onClick={props.selectSortAlgo}
        >
          Shell Sort
        </button>
         
      </div>
    </header>
  );
}
