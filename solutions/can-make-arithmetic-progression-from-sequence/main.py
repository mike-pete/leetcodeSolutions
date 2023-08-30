# difference = find the smallest difference from the 0 index number
# also create a hash map (or set) of all of the numbers
#   if a number appears twice, then false
# also keep track of the smallest and largest numbers

# after iteration one: (large - small) / diff != array length, then false

# then iterate array and 
# current neighbor = current num +- difference
#   if current num is largest or smallest, then it must have it's neighbor in the set, else false
#   else if current num does not have both neighbors in the set, false

# return true


def canMakeArithmeticProgression(arr):
    if (len(arr) == 2):
        return True
    
    numSet = {arr[0]}
    diff = abs(arr[0] - arr[1])
    smallestNum = arr[0]
    largestNum = arr[0]
    
    for num in arr[1:]:
        diffFromFirstNum = abs(arr[0] - num)
        if (diffFromFirstNum < diff):
            diff = diffFromFirstNum
        
        numSet.add(num)

        if (num < smallestNum):
            smallestNum = num
        elif (num > largestNum):
            largestNum = num
        
    if (len(numSet) == 1):
        return True
    elif (len(numSet) != len(arr)):
        return False

    if ((largestNum - smallestNum) / diff != len(arr) - 1):
        return False
    
    for num in arr:
        bigNeighbor = num + diff
        smallNeighbor = num - diff

        if (num != largestNum):
            if (bigNeighbor not in numSet):
                return False
        if (num != smallestNum):
            if (smallNeighbor not in numSet):
                return False
            
    return True




print(canMakeArithmeticProgression([3,5,1]))