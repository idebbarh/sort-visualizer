import { sleepForAnimation } from "../App";

export default async function quickSort(numsArray, setNumsArray, l, h) {
  if (l <= h) {
    let j = await partition(l, h, numsArray, setNumsArray);
    await quickSort(numsArray, setNumsArray, l, j - 1);
    await quickSort(numsArray, setNumsArray, j + 1, h);
  }
}

async function partition(l, h, numsArray, setNumsArray) {
  let i = l;
  let j = h;
  let pivot = numsArray[i].value;
  let tmp;
  numsArray[l].isPivot = true;
  setNumsArray([...numsArray]);
  while (i < j) {
    numsArray[i].isComparing = true;
    numsArray[j].isComparing = true;
    setNumsArray([...numsArray]);
    await sleepForAnimation(50);
    while (numsArray[i].value <= pivot && i < j) {
      numsArray[i].isComparing = false;
      i++;
      numsArray[i].isComparing = true;
      setNumsArray([...numsArray]);
      await sleepForAnimation(50);
    }
    while (numsArray[j].value > pivot) {
      numsArray[j].isComparing = false;
      j--;
      numsArray[j].isComparing = true;
      setNumsArray([...numsArray]);
      await sleepForAnimation(50);
    }
    if (i < j) {
      tmp = numsArray[i].value;
      numsArray[i].value = numsArray[j].value;
      numsArray[j].value = tmp;
    }
    numsArray[i].isComparing = false;
    numsArray[j].isComparing = false;
    setNumsArray([...numsArray]);
    await sleepForAnimation(50);
  }
  if (h - l <= 3) {
    console.log(l, h);
  }
  numsArray[l].isPivot = false;
  tmp = numsArray[l].value;
  numsArray[l].value = numsArray[j].value;
  numsArray[j].value = tmp;
  numsArray[j].isInRightPlace = true;
  setNumsArray([...numsArray]);
  await sleepForAnimation(50);
  return j;
}
