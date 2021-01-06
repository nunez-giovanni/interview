# Quick Sort

## what is it
QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

Always pick first element as pivot.
Always pick last element as pivot (implemented below)
Pick a random element as pivot.
Pick median as pivot.

## Pros
Easy to implement 

## Cons 
Time complexity is not the best.

## Big-O
Time complexity is O( n*log(n) )

Worst case:
Since we have to recursively call each partition, effectively growing exponentially.  

Average case & Best Case:
n*log(n)

Side note as to what n * log(n)
- we already know that `O(n)` is linear, meaning if you have 10 items, you end up with 10 steps. 20 items, then 20 steps and so on. Grows in a linear fashion.
-  O(n log n) means that for each thing you have to do extra work proportional to the number of digits in the count describing what it is you are looking at.


## JavaScript Code Example 
```

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

```


## Swift Code Example
```

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
```

[Link to LeetCode Example](https://leetcode.com/submissions/detail/439367598/)
