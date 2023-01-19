import Header from "./components/Header";
import { useState } from "react";
import Main from "./components/Main";
import bubbleSort from "./sorting-algorithms/bubbleSort";
import mergeSort from "./sorting-algorithms/mergeSort";
import quickSort from "./sorting-algorithms/quickSort";
import heapSort from "./sorting-algorithms/heapSort";
import insertionSort from "./sorting-algorithms/insertionSort";
import selectionSort from "./sorting-algorithms/selectionSort";
import shellSort from "./sorting-algorithms/shellSort";
function App() {
  const [sortAlgo, setSortAlgo] = useState(null);
  const [isAlgoRunning, setIsAlgoRunning] = useState(false);
  const [lengthOfArray, setLengthOfArray] = useState(80);
  const nums = [];
  for (let i = 0; i < lengthOfArray; i++) {
    let randomNumber = randomNumberBetween(5, 105);
    while (nums.includes(randomNumber)) {
      randomNumber = randomNumberBetween(5, 105);
    }
    nums.push(randomNumber);
  }
  const [numsArray, setNumsArray] = useState(
    nums.map((item, indx) => {
      return {
        value: item,
        isComparing: false,
        isInRightPlace: false,
        index: indx,
        isPivot: false,
        isParent: false,
        isGap:false,
      };
    })
  );
  async function startSorting() {
    setIsAlgoRunning(true);
    if (sortAlgo === "bubble-sort") {
      await bubbleSort(numsArray, setNumsArray);
    } else if (sortAlgo === "merge-sort") {
      await mergeSort([...numsArray], setNumsArray, numsArray);
    } else if (sortAlgo === "quick-sort") {
      await quickSort(numsArray, setNumsArray, 0, numsArray.length - 1);
    } else if (sortAlgo === "heap-sort") {
      await heapSort(numsArray, setNumsArray);
    } else if (sortAlgo === "insertion-sort") {
      await insertionSort(numsArray, setNumsArray);
    } else if (sortAlgo === "selection-sort") {
      await selectionSort(numsArray, setNumsArray);
    }
    else if(sortAlgo === "shell-sort"){
      await shellSort(numsArray, setNumsArray)
    }
    setIsAlgoRunning(false);
  }
  function selectSortAlgo(e) {
    setSortAlgo(e.target.getAttribute("data-algo-name"));
  }
  function generateNewArray() {
    const newArray = [];
    for (let i = 0; i < lengthOfArray; i++) {
      let randomNumber = randomNumberBetween(5, 105);
      while (newArray.includes(randomNumber)) {
        console.log(lengthOfArray);
        randomNumber = randomNumberBetween(5, 105);
      }
      newArray.push(randomNumber);
    }
    setNumsArray(
      newArray.map((item, indx) => {
        return {
          value: item,
          isComparing: false,
          isInRightPlace: false,
          index: indx,
          isPivot: false,
          isParent: false,
        };
      })
    );
  }
  function handleArrayLength(event) {
    setLengthOfArray(parseInt(event.target.value));
    generateNewArray();
  }
  return (
    <div className="App">
      <Header
        startSorting={startSorting}
        selectSortAlgo={selectSortAlgo}
        sortAlgo={sortAlgo}
        isAlgoRunning={isAlgoRunning}
        lengthOfArray={lengthOfArray}
        handleArrayLength={handleArrayLength}
      />
      <Main
        numsArray={numsArray}
        generateNewArray={generateNewArray}
        isAlgoRunning={isAlgoRunning}
        sortAlgo={sortAlgo}
      />
    </div>
  );
}
function randomNumberBetween(start, end) {
  const num = Math.floor(Math.random() * Math.abs(end - start) + start);
  return num;
}

function sleepForAnimation(delayTime) {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
}
export default App;
export { sleepForAnimation };
