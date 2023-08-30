package main

func main(){
	canJump([]int{2,3,1,1,4})
}

func canJump(nums []int) bool {
	canReach := len(nums) - 1

	for i:= canReach; i >= 0; i-- {
		if nums[i] + i >= canReach {
			canReach = i
		}
	}

	if canReach != 0 { return false }
    return true
}