import { sleepForAnimation } from "../App";

export default async function shellSort(numsArray, setNumsArray) {
  const size = numsArray.length;
  let gap = Math.floor(size / 2);
  while (gap > 0) {
    setGaps(gap,numsArray,setNumsArray)
    for (let i = gap; i < size; i++) {
      let anchor = numsArray[i].value;
      numsArray[i].isPivot = true;
      let j = i;
      while (j >= gap && anchor < numsArray[j - gap].value) {
        numsArray[j].isComparing = true;
        numsArray[j - gap].isComparing = true;
        numsArray[j].value = numsArray[j - gap].value;
        setNumsArray([...numsArray])
        await sleepForAnimation(50)
        numsArray[j].isComparing = false;
        numsArray[j - gap].isComparing = false;
        j -= gap;
      }
      numsArray[j].value = anchor;
      numsArray[i].isPivot = false;
      if(gap === 1 ){
        numsArray[0].isInRightPlace = true;
        numsArray[j].isInRightPlace = true;
        numsArray[i].isInRightPlace = true;
      }
      setNumsArray([...numsArray])
      await sleepForAnimation(50)
    }
    gap = Math.floor(gap / 2);
    removeGaps(gap,numsArray,setNumsArray);
  }
  setNumsArray([...numsArray]);
}
function setGaps(gap,numsArray,setNumsArray){
    for(let i = gap ; i <numsArray.length; i+=gap){
        numsArray[i].isGap = true;
    }
    for(let i = gap ; i >= 0 ; i-=gap){
        numsArray[i].isGap = true;
    }
    setNumsArray([...numsArray]);
}
function removeGaps(gap,numsArray,setNumsArray){
    for(let i = 0 ; i < numsArray.length ; i++){
        numsArray[i].isGap = false;
    }
    setNumsArray([...numsArray]);
}