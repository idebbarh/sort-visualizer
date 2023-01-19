import { sleepForAnimation } from "../App";

export default async function mergeSort(newNumsArr, setNumsArray, originArr) {
  if (newNumsArr.length <= 1) {
    return;
  }
  const arrMiddle = Math.floor(newNumsArr.length / 2);
  const left = newNumsArr.slice(0, arrMiddle);
  const right = newNumsArr.slice(arrMiddle);
  await mergeSort(left, setNumsArray, originArr);
  await mergeSort(right, setNumsArray, originArr);
  await mergeTwoSortedLists(left, right, newNumsArr, setNumsArray, originArr);
}

async function mergeTwoSortedLists(
  listA,
  listB,
  newNumsArr,
  setNumsArray,
  originArr
) {
  let pA = 0;
  let pB = 0;
  let k = 0;
  let interVal = [listA[0].index, listB[listB.length - 1].index];
  let mergedArr;
  while (pA < listA.length && pB < listB.length) {
    originArr[listA[pA].index].isComparing = true;
    originArr[listB[pB].index].isComparing = true;
    setNumsArray([...originArr]);
    if (listA[pA].value < listB[pB].value) {
      newNumsArr[k] = { ...newNumsArr[k], value: listA[pA].value };
      setNumsArray([...originArr]);
      pA += 1;
    } else {
      newNumsArr[k] = { ...newNumsArr[k], value: listB[pB].value };
      setNumsArray([...originArr]);
      pB += 1;
    }
    k += 1;
    setNumsArray([...originArr]);
    await sleepForAnimation(50);
  }

  while (pA < listA.length) {
    originArr[listA[pA].index].isComparing = true;
    newNumsArr[k] = { ...newNumsArr[k], value: listA[pA].value };
    setNumsArray([...originArr]);
    await sleepForAnimation(50);
    pA += 1;
    k += 1;
  }
  while (pB < listB.length) {
    originArr[listB[pB].index].isComparing = true;
    newNumsArr[k] = { ...newNumsArr[k], value: listB[pB].value };
    setNumsArray([...originArr]);
    await sleepForAnimation(50);
    pB += 1;
    k += 1;
  }
  mergedArr = [
    ...originArr.slice(0, interVal[0]),
    ...newNumsArr,
    ...originArr.slice(interVal[1] + 1),
  ];
  for (let i = 0; i < mergedArr.length; i++) {
    if (i >= interVal[0] && i <= interVal[1]) {
      originArr[i] = { ...mergedArr[i] };
      originArr[i].isComparing = false;
      if (interVal[0] === 0 && interVal[1] === originArr.length - 1) {
        originArr[i].isInRightPlace = true;
      }
      setNumsArray([...originArr]);
      await sleepForAnimation(50);
    }
  }
  await sleepForAnimation(50);
}
