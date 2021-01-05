#!/usr/bin/env python3

var someArray = [ 8, 1, 7, 20, 40, 33, 28, 45, 37, 9]

func insertionSort(myArray: [Int])-> [Int] {
	// if array is 1 item or less, then it's already sorted so return it.
	if myArray.count <= 1 {
		return myArray
	}
	
	// passed value is immutable so make a new ref. to it.
	var myArray = myArray
	
	// for range of our array starting at second item
	for index in 1..<myArray.count {
		
		// record current value of second item
		let currentValue = myArray[index]
		// record previous item's index
		var previousIndex = index - 1
		
		// while previous index is still within array range and current value is smaller than previous element
		while (previousIndex > -1 && currentValue < myArray[previousIndex]) {
			
			// make current value the value of previous value
			myArray[previousIndex + 1] = myArray[previousIndex]
			
			// decrease previous index by 1 so we can check if we need to swap with that too
			previousIndex = previousIndex - 1
		}
		
		// if while loop is no longer applicable then add the recored value we needed to swap to the last index spot of previous + 1
		myArray[previousIndex + 1] = currentValue
	}
	
	return myArray
}

// print to review results 
let results = insertionSort(myArray: someArray)
print(results)