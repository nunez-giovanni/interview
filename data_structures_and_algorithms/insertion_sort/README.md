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