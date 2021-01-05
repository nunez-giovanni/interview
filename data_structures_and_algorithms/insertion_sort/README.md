# Insertion Sort

## what is it
* Simple algorithm that works the same way you would sort cards in your hands.
* Values from an unsorted  section are moved to the sorted area

## Pros
Quick for semi-sorted short lists.

## Cons 
* slow due to complexity.
* performance is directly proportional to the squared size of the input data set

## Big-O
* Time complexity is Quadratic: O(n*2)
* Since we have to use a for loop to iterate over every item and compare it to previous items. 

* Average: O(n*2) is both worst and average complexity. 
* Worst case: O(n*2)
* Best case: Times O(n) as best case if items are already sorted, as we traverse array once.


## Swift Code Example
```
var someArray = [ 8, 1, 7, 20, 40, 33, 28, 45, 37, 9]

func insertionSort(myArray: [Int])-> [Int] {
    var myArray = myArray
    // return if empty or only 1 element
    // else
    
    // for range of our array starting at second item
    for index in 1...myArray.count - 1 {
        
        // record current value of second item
        var currentValue = myArray[index]
        // record previous index
        var previousIndex = index - 1
        
        // while previous index is still within array range and current value is smaller than previous element
        while (previousIndex > -1 && currentValue < myArray[previousIndex]) {
            
            // make current value the value of previous value
            myArray[previousIndex + 1] = myArray[previousIndex]
            
            // decrease previous index by 1 so we can check if we need to swap with that too
            previousIndex = previousIndex - 1
        }
        
        // if while is no longer applicable then add the recored value we needed to swap to the last index spot of previous + 1
        myArray[previousIndex + 1] = currentValue
    }
    
    return myArray
}

let results = insertionSort(myArray: someArray)
print(results)
```


## Javascript Code Example 
```
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
```