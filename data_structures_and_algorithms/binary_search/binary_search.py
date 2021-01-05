#!/usr/bin/env python3

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

res = binarySort(my_list, 18)
print(res)