let randomdata = [ 6, 5, 1, 2, 7, 9]

function mergeSort(data) {
	// return data set of 1 item or less as sorted 
	if (data.length <= 1) {
		return data;
	}
	
	// Calculate the middle index value of our array 
	let middleOfArray = Math.floor((0 + data.length) / 2)
	
	// split the array in half with a left and right
	let left = data.slice(0, middleOfArray)
	let right = data.slice(middleOfArray)
	
	
	// recursively call merge sort for our left and right, as they are passed into merge function
	return merge(mergeSort(left), mergeSort(right))
	
}

function merge(left, right) {
	// Create a counter to keep track of the traversed items
	let leftIndex = 0;
	let rightIndex = 0;
	
	// Array for our sorted left and right data
	let finalLeftArray = []
	let finalRightArray = []
	
	
	// while index counters are less than the array lengths i.e while we havent visited every item
	while (leftIndex < left.length && rightIndex < right.length) {
		// if item at current left array is smaller than current item on right array
		if (left[leftIndex] < right[rightIndex]) {
			// add the item on left array to our final left array 
			finalLeftArray.push(left[leftIndex])
			// increment the counter for leftIndex
			leftIndex++
		}
		// but if the item in the right array is smaller than item at current left array position
		else if (right[rightIndex] < left[leftIndex]) {
			// add right value to our final left array 
			finalLeftArray.push(right[rightIndex])
			
			// increment counter for the right index
			rightIndex++
		}
		
		// otherwise, for example, items may be same value
		else {
			// so add it to our final right array
			finalRightArray.push(right[rightIndex])
			// increment the right index since we recorded this value 
			rightIndex++
		}
	}
	
	// At times there will be some items left in either left or right once the first while condition is no longer true, so add those items to their respective final arrays
	
	// if any unvisited items from lef array
	while ( leftIndex < left.length) {
		// add them to final left and continue to check left array for more
		finalLeftArray.push(left[leftIndex])
		leftIndex++
	} 
	
	// if any unvisted items from right index
	while (rightIndex < right.length) {
		// then add them to our final right array and continue to check origianal right array
		finalRightArray.push(right[rightIndex])
		rightIndex++
	}
	
	
	// return the final left and right arrays as a single array
	return [].concat(finalLeftArray, finalRightArray)
	
}

// a console log for testing
console.log(mergeSort(randomdata))