package main

func main(){
	countNegatives(
		[][]int{
			{4,3,2,-1},
			{3,2,1,-1},
			{1,1,-1,-2},
			{-1,-1,-2,-3}})

	countNegatives(
		[][]int{
			{1 ,-1},
			{-1 ,-1}})

	countNegatives(
		[][]int{
			{3 ,2},
			{-3 ,-3},
			{-3 ,-3},
			{-3 ,-3},
		})
}

func countNegatives(grid [][]int) (negativeCount int) {
	cursor := len(grid[0]) - 1

	for i, row := range grid{
		for cursor >= 0 && row[cursor] < 0 {
			negativeCount += len(grid) - i
			cursor--
		}
	}

    return
}