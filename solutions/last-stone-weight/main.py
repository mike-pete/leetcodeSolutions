from heapq import heapify, heappop, heappush

def lastStoneWeight(stones):
    stones = [-x for x in stones]
    heapify(stones)
    print(stones)

    while len(stones) > 1:
        stoneA = heappop(stones)
        stoneB = heappop(stones)
        diff = stoneA - stoneB
        print(stoneA, stoneB, diff)

        if (diff):
            heappush(stones, diff)
    
    if len(stones) == 1:
        return heappop(stones) * -1
    return 0

lastStoneWeight([4,5,2,1,7])