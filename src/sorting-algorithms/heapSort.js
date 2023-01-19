import { sleepForAnimation } from "../App";

export default async function heapSort(numsArray, setNumsArray) {
  //O(N log N)
  //step one create heap by comparing the child value by the parent value.
  //if parent value smaller than child value we swap them.
  //there two ways, heapify and insert child by child but the heapify is faster, i shoose the second method for the creating.
  // and i will use the heapify when i start deleting from the heap.
  await buildMaxHeap(numsArray, setNumsArray);
  let lastPos = numsArray.length - 1;
  let firstPos = 0;
  let tmp;
  //step two the swapping or deleting from heap.
  while (firstPos <= lastPos) {
    numsArray[firstPos].isComparing = true;
    numsArray[lastPos].isComparing = true;
    setNumsArray([...numsArray]);
    await sleepForAnimation(50);
    tmp = numsArray[firstPos].value;
    numsArray[firstPos].value = numsArray[lastPos].value;
    numsArray[lastPos].value = tmp;
    numsArray[firstPos].isComparing = false;
    numsArray[lastPos].isComparing = false;
    numsArray[lastPos].isInRightPlace = true;
    setNumsArray([...numsArray]);
    await sleepForAnimation(50);
    await heapify(numsArray, setNumsArray, 0, lastPos);
    lastPos -= 1;
  }
  setNumsArray([...numsArray]);
}
//heapify
async function heapify(numsArray, setNumsArray, parentIndex, lastPos) {
  //O(N)
  let largest = parentIndex;
  let l = 2 * parentIndex + 1;
  let r = 2 * parentIndex + 2;
  let tmp;
  numsArray[parentIndex].isParent = true;
  if (l < lastPos) {
    numsArray[l].isComparing = true;
  }
  if (r < lastPos) {
    numsArray[r].isComparing = true;
  }
  setNumsArray([...numsArray]);
  await sleepForAnimation(50);
  if (l < lastPos && numsArray[largest].value < numsArray[l].value) {
    largest = l;
  }
  if (r < lastPos && numsArray[largest].value < numsArray[r].value) {
    largest = r;
  }
  if (largest !== parentIndex) {
    tmp = numsArray[parentIndex].value;
    numsArray[parentIndex].value = numsArray[largest].value;
    numsArray[largest].value = tmp;
    numsArray[parentIndex].isParent = false;
    if (l < lastPos) {
      numsArray[l].isComparing = false;
    }
    if (r < lastPos) {
      numsArray[r].isComparing = false;
    }
    setNumsArray([...numsArray]);
    await heapify(numsArray, setNumsArray, largest, lastPos);
  }
  numsArray[parentIndex].isParent = false;
  if (l < lastPos) {
    numsArray[l].isComparing = false;
  }
  if (r < lastPos) {
    numsArray[r].isComparing = false;
  }
  setNumsArray([...numsArray]);
}
async function buildMaxHeap(numsArray, setNumsArray) {
  //O(nlogn)
  let tmp;
  for (let i = 0; i < numsArray.length; i++) {
    let parentIndex = Math.floor((i + 1) / 2) - 1;
    let childIndex = i;
    while (childIndex > 0) {
      numsArray[childIndex].isComparing = true;
      numsArray[parentIndex].isComparing = true;
      setNumsArray([...numsArray]);
      await sleepForAnimation(50);
      if (numsArray[childIndex].value > numsArray[parentIndex].value) {
        tmp = numsArray[childIndex].value;
        numsArray[childIndex].value = numsArray[parentIndex].value;
        numsArray[parentIndex].value = tmp;
      }
      numsArray[childIndex].isComparing = false;
      numsArray[parentIndex].isComparing = false;
      setNumsArray([...numsArray]);
      await sleepForAnimation(50);
      childIndex = parentIndex;
      parentIndex = Math.floor((parentIndex + 1) / 2) - 1;
    }
  }
  setNumsArray([...numsArray]);
  await sleepForAnimation(50);
}
