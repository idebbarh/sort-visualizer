import { sleepForAnimation } from "../App";



export default async function insertionSort(numsArray, setNumsArray){
    for(let i = 1; i < numsArray.length;i ++){
        let anchor = numsArray[i].value
        numsArray[i].isPivot = true;
        let j = i-1;
        while(j >= 0 && anchor < numsArray[j].value){
            numsArray[j+1].isComparing = true;
            numsArray[j].isComparing = true;
            numsArray[j+1].value = numsArray[j].value;
            setNumsArray([...numsArray])
            await sleepForAnimation(50)
            numsArray[j+1].isComparing = false;
            numsArray[j].isComparing = false;
            j-=1
        }
        numsArray[j+1].isComparing = true;
        numsArray[j+1].value = anchor;
        numsArray[j+1].isInRightPlace = true;
        numsArray[i].isInRightPlace = true;
        numsArray[i].isPivot = false;
        setNumsArray([...numsArray])
        await sleepForAnimation(50)
        numsArray[j+1].isComparing = false;
    }
}