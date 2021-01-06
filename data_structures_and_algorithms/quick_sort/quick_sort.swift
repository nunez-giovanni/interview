
func quickSort(_ data: [Int]) -> [Int] {
	if data.count <= 1 {
		return data
	}
	
	// assigned data to a variable in scope, as passed value is immutable.
	var data = data;
	
	// create a counter for our starting position in the array
	var counter = 0;
	// remove last entry from array and use it as pivot.
	// In swift this returns an optional, so we need to make sure we unwrap it
	guard var pivot = data.popLast() else { return [] }
	
	// Empty array for less than and greater than pivot values
	var leftArray: [Int] = []
	var rightArray: [Int] = []
	
	// while counter is within array bounds 
	while counter < data.count {
		// if value is less than pivot
		if data[counter] < pivot {
			// add it to left array
			leftArray.append(data[counter])
		
		// if value is greater than pivot 
		} else if data[counter] > pivot {
			// add to right array
			rightArray.append(data[counter])
			
		// otherwise value is the same as pivot, so add anywhere.
		} else {
			rightArray.append(data[counter])
		}
		
		// increment counter so we can continue while loop, otherwise we'll end up with an infinite loop.
		counter += 1
	}
	
	// Recursively call quicksort on any left & right arrays 
	// return the resulting concatenation of left array, pivot as a rray, and right array.
	return quickSort(leftArray) + [pivot] + quickSort(rightArray)
}


/* The following is only used for testing our algorithm */
// Test data: An array of integers 
let randomArray = [ 1, 6, 4, 0, 0, 5] 
// Call function, assign results to constant, and print out results 
let results = quickSort(randomArray)
print(results)