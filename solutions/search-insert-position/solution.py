def searchInsert(nums, target):
    start = 0
    end = len(nums) - 1
    middleNum = -1

    while (end-start > 1):
        perfectMiddle = (end - start) % 2 == 0
        middle = (end - start) // 2 + start

        if (not perfectMiddle):
            if (target > nums[middle]):
                middle+=1
        
        middleNum = nums[middle]
        
        if (middleNum == target):
            return middle
        elif (middleNum > target):
            end = middle
        else:
            start = middle

    if (target > nums[end]):
        return end + 1
    elif (target > nums[start]):
        return end
    return start



print(searchInsert([1,3,5,6], 5)) #2
print(searchInsert([1,3,5,6], 2)) #1
print(searchInsert([1,3,5,6,10], 7)) #4
print(searchInsert([1,3,5,6], 0)) #0
print(searchInsert([1,3,5,6], 7)) #4
print(searchInsert([1], 2)) #1
print(searchInsert([1], 0)) #0
print(searchInsert([1], 1)) #0