def searchInsert(nums, target):
    for i, num in enumerate(nums):
        if (num == target):
            return i
        elif (num > target):
            return i
    return len(nums)

print(searchInsert([1,3,5,6], 5)) #2
print(searchInsert([1,3,5,6], 2)) #1
print(searchInsert([1,3,5,6,10], 7)) #4
print(searchInsert([1,3,5,6], 0)) #0
print(searchInsert([1,3,5,6], 7)) #4
print(searchInsert([1], 2)) #1
print(searchInsert([1], 0)) #0
print(searchInsert([1], 1)) #0