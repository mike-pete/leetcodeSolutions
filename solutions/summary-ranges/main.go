package main

import "fmt"

func main(){
	summaryRanges([]int{0,1,2, 4,5, 7})
}

func summaryRanges(nums []int) (ranges []string) {
	if len(nums) == 0 { return }

	start := nums[0]

	for i, num := range nums[0:] {
		if i < len(nums) - 1 {
			if num + 1 != nums[i+1] {
				ranges = append(ranges, formatRangeString(start, num))
				start = nums[i + 1]
			}
		} else {
			ranges = append(ranges, formatRangeString(start, num))
		}
	}

	return
}

func formatRangeString(start int, end int) string {
	if (start == end){
		return fmt.Sprint(start)
	} else {
		return fmt.Sprintf("%d->%d", start, end)
	}
}

