import { sleepForAnimation } from "../App";

export default async function bubbleSort(numsArray, setNumsArray) {
  for (let i = 0; i < numsArray.length; i++) {
    let tmp;
    for (let j = 0; j < numsArray.length - 1 - i; j++) {
      numsArray[j].isComparing = true;
      numsArray[j + 1].isComparing = true;
      if (numsArray[j].value > numsArray[j + 1].value) {
        tmp = numsArray[j + 1].value;
        numsArray[j + 1].value = numsArray[j].value;
        numsArray[j].value = tmp;
      }
      if (j === numsArray.length - 2 - i) {
        numsArray[j + 1].isInRightPlace = true;
      }
      setNumsArray([...numsArray]);
      await sleepForAnimation(50);
      numsArray[j].isComparing = false;
      numsArray[j + 1].isComparing = false;
    }
    await sleepForAnimation(50);
  }
  numsArray[0].isInRightPlace = true;
  setNumsArray([...numsArray]);
}
