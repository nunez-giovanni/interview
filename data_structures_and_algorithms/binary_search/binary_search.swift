let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

func binarySearch(data: [Int], target: Int) -> Int {
    var left = 0;
    var right = data.count - 1
    
    while left <= right {
        let pivot = (left + right) / 2 
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