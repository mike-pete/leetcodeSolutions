
def moveZeroes(nums):
    count = 0
    for i in range(len(nums)):
        if nums[i-count] == 0:
            del nums[i-count]
            nums.append(0)
            count += 1



    

    return nums


print(moveZeroes([0,1,0,3,12]))
print(moveZeroes([0]))
print(moveZeroes([1]))
print(moveZeroes([2,1]))