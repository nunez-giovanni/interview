let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function binarySearch(orderedArray, target) {
  // create variable for our start and end of array index
  let left = 0;
  let right = orderedArray.length - 1;
  
  
  // while our left index is less than right index
  
  // if our target is larger than what we have in the array, our Left side will eventually equal our right, then our left will try to move to the right of the "right" side, which will cause this while loop to exit as left will no longer be less or equal to right.
  
  //same occurs if target is less than what is in array, but with right becoming smaller in value than left - causing loop to exit. 
  while (left <= right) {
    
    // we have to round otherwise we might keep searching the same value over and over 
    let pivot = Math.floor((right + left) / 2)

    // debug to see what values are at what iteration
    console.log("Current pivot:", pivot, " current pivot value:", orderedArray[pivot])
    
    // target and value at pivot are the same, then return answer
    if (target === orderedArray[pivot]) {
      return pivot
    }
    
    // if target is less than pivot than make pivot - 1 the new end of the check
    else if (target < orderedArray[pivot]) {
      right = pivot - 1;
    }
    
    // otherwise it means the target is larger than pivot so we make start pivot + 1
    else {
      left = pivot + 1
    }
  }
  
  // if array is empty, or value not present, this should return -1
  return -1
}

console.log(binarySearch(myArray, 16))