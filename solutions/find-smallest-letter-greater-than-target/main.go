package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
	nextGreatestLetter([]byte{'c', 'f', 'j'}, 'a')
}

func nextGreatestLetter(letters []byte, target byte) byte {

	for _, curr := range letters {
		fmt.Println(curr)
		if curr > target {
			return curr
		}
	}

	return letters[0]
}