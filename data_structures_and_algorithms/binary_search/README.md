# Binary Search

## what is it
Binary search is efficient as it works by cutting the data in half to find the desired item. 

## Pros
Fast search 

## Cons 
Data must be sorted to use 

## Big-O
Average complexity: O( Log n ) - logarithmic time 
This is the complexity we give during interviews.  
On average it will take us log of the N value.
With each iteration, the input size decreases by a constant multiple factor.

Best Complexity: O(1) - Constant time .  
At best we might find the desired value on the first check.


Worst Complexity: O( Log n ).   
Luckily at worst it will still take log of N items.


## JavaScript Code Example
```
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let emptyArray = [16]

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
```

## Swift Code Example
```
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

func binarySearch(data: [Int], target: Int) -> Int {
    var left = 0;
    var right = data.count - 1
    
    while left <= right {
        var pivot = (left + right) / 2 
        if target == data[pivot] {
            return pivot
        }
        else if target < data[pivot] {
            right = pivot - 1
        }
        else {
            left = pivot + 1
        }
    }
    return -1
}

let results = binarySearch(data: sortedArray, target: 6)
print(results)
```


## Python Code Example 
```
my_list = [ 1, 2, 3, 4, 6, 7 ,9, 10, 13, 17, 18, 21, 22]

def binarySort(orderedArray, target):
	# Create reference to start and end indices 
	left = 0
	right = len(orderedArray) - 1
	
	# while left is less than right 
	# note: if target is out of range and larger than last index, left will eventually be larger than right
	#.   	  if target is out of range and Smaller than first index, right will eventually become smaller than left 
	while left <= right:
		
		# make a reference to the current pivot 
		pivot = (left + right)//2 
		
		# if our target is the same value as the item at pivot then return 
		if target == orderedArray[pivot]:
			return pivot
		
		# otherwise if target is smaller than current value at pivot, then make right pivot - 1 
		elif target < orderedArray[pivot]:
			right = pivot - 1
			
		# otherwise it means target is to the right of pivot, so make left pivot + 1 
		else:
			left = pivot + 1
		
	# if value is eventually not found, then just return -1 
	return -1
		
res =	binarySort(my_list, 19)
print(res)
```