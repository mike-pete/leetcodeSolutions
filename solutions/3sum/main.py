def threeSum(nums):
    triplets = set()
    nums.sort()
    left = 0
    right = -1

    print(nums)
    
    while (left + -right < len(nums) - 1):
        track = nums[left+1:right]
        leftVal = nums[left]
        rightVal = nums[right]

        # print('\nposts', left, right)
        # print('\nposts', nums[left], nums[right])
        
        for runnerVal in track:
            print('runner', runnerVal)
            totalSum = leftVal + runnerVal + rightVal

            if (totalSum == 0):
                triplets.add(f'{leftVal},{runnerVal},{rightVal}')
        
            if (totalSum >= 0):
                break

        if (leftVal + rightVal <= 0):
            left += 1
        else:
            right -= 1


    convertedTriplets = []
    for triplet in triplets:
        numericTriplets = [int(x) for x in triplet.split(',')]
        convertedTriplets.append(numericTriplets)

    return convertedTriplets



# print(threeSum([-1,0,1,2,-1,-4]))
# print(threeSum([-2,0,1,1,2]))
print(len(threeSum([-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4])))

# -3,-1,4
# -2,-1,3
# -1,-1,2