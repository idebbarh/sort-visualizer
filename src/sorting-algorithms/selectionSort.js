import { sleepForAnimation } from "../App"




export default async function selectionSort(numsArray, setNumsArray){
    let tmp;
    for(let i = 0 ; i < numsArray.length; i++){
        let minNum = Infinity;
        let minNumIndx = null;
        numsArray[i].isComparing = true;
        for(let j = i ;j<numsArray.length;j++){
            numsArray[j].isComparing = true;
            setNumsArray([...numsArray]);
            await sleepForAnimation(50);
            if(numsArray[j].value < minNum){
                if(minNumIndx !== null){
                    numsArray[minNumIndx].isParent = false;
                    setNumsArray([...numsArray]);
                }
                minNum = numsArray[j].value;
                minNumIndx = j;
                numsArray[minNumIndx].isParent = true;
                setNumsArray([...numsArray]);
            }
            if(i!==j){
                numsArray[j].isComparing = false;
            }
        }
        tmp = numsArray[minNumIndx].value;
        numsArray[minNumIndx].value = numsArray[i].value;
        numsArray[i].value = tmp;
        setNumsArray([...numsArray]);
        await sleepForAnimation(50);
        numsArray[i].isComparing = false;
        numsArray[i].isInRightPlace = true;
        numsArray[minNumIndx].isParent = false;
    }
    setNumsArray([...numsArray])
}