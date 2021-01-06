
function quickSort(data) {
	if (data.length <= 1) {
		return data;
	}
	
	// Use the last element as the pivot. 
	// in JS pop will return the value AND remove it from the array
	let pivotValue = data.pop() 
	// keep track of the current array element index, starting from 0
	let currentIndex = 0;
	
	// Arrays to keep track of our less than or greater than values when comaparing to pivot
	let leftArray = []
	let rightArray = []
	
	// While we have not visited every element in the array i.e  O (n)
	while (currentIndex < data.length) {
		// I made a referenct to the current value of the current index, for redability
		let itemToCompare = data[currentIndex]

		// if current item is less than pivot
		if (itemToCompare < pivotValue) {
			// add it to smaller than array
			leftArray.push(itemToCompare)
		}
		// if current item is larger than pivot 
		else if (itemToCompare > pivotValue) {
			// add it to larger than array
			rightArray.push(itemToCompare)
		}
		else {
			// otherwise it means we have a value that is the same as pivot. Add anywhere.
			rightArray.push(itemToCompare)
		}
		
		// increment the index so we can continue while loop until end
		currentIndex++
	}

	// In JS we can take advantage of the concat feature to concat the results of left array & right array
	// notice I added the pivot in the middle
	 return [].concat(quickSort(leftArray), pivotValue, quickSort(rightArray))
}

/* The following is simply used to run and test the function */ 
let randomArray = [ 1, 6, 4, 0, 0, 5] // a set of random test data 
console.log("Results: ", quickSort(randomArray)) // a call to the function wrapped around a console log
