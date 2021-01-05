// arbitrary array of data 
let someArray = [ 8, 1, 7, 20, 40, 33, 28, 45, 37, 9]

function insertionSort(data) {
	// return array if 1 item or less as this is already sorted
	if (data.length <= 1) {
		return data
	}
	
	// walk array starting from our second item
	for (let x = 1; x < data.length; x++) {
		
		// make a constant reference to current item's value
		const valueToSort = data[x]
		// make a variable reference to the previous item's index
		let previousItemIndex = x - 1
		
		// while previous item index is not out of bounds, and the current value is less than the value of the item to it's left
		while (previousItemIndex > -1 && data[valueToSort] < data[previousItemIndex]) {
			// swap the value from the left item to the right item
			data[previousItemIndex + 1] = data[previousItemIndex]
			// reduce the previous item's index by 1 so we can repeat while loop if needed 
			previousItemIndex--
		}
		
		// if while loop no longer applicable, then we found the desired position for our value at X.
		// so we assign this current index position the value of X 
		data[previousItemIndex + 1] = valueToSort
	}
	
	return data;
}

// printing results
let results = insertionSort(someArray)
console.log(results)