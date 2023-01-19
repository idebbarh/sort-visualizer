import algorithmsInfos from "../sorting-algorithms/algorithmsInfos";
export default function Main(props) {
  const allContainers = props.numsArray.map((obj, index) => {
    return (
      <div
        className={`num-container ${obj.isComparing && "is-comparing"} ${
          obj.isInRightPlace && "right-place"
        } ${obj.isPivot && "pivot"} ${obj.isParent && "parent"} ${obj.isGap && "gap-elem"}`}
        style={{ height: `${obj.value}%` }}
        key={index}
      ></div>
    );
  });
  return (
    <main className="main">
      <div className="nums-container">{allContainers}</div>
      <button
        className={`generate-new-array-btn ${props.isAlgoRunning && "disable"}`}
        onClick={props.generateNewArray}
      >
        Generate New Array
      </button>
      {props.sortAlgo !== null && (
        <p className="algo-info">
          <div className="time-complexity">
            <span>Time Complexity:</span> Best{" "}
            {algorithmsInfos[props.sortAlgo].time.best}, Average{" "}
            {algorithmsInfos[props.sortAlgo].time.average}, Worst{" "}
            {algorithmsInfos[props.sortAlgo].time.worst}
          </div>
          <div className="space-complexity">
            <span>Space Complexity:</span> Worst{" "}
            {algorithmsInfos[props.sortAlgo].space.worst}
          </div>
        </p>
      )}
    </main>
  );
}
