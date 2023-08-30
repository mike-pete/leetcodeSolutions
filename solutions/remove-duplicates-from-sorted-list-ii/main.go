package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func buildLinkedList(arr []int) (head *ListNode) {
	head = new(ListNode)
	node := head
	for i, num := range arr {
		node.Val = num
		if i < len(arr)-1 {
			node.Next = new(ListNode)
			node = node.Next
		}
	}
	return
}

func printLinkedList(head *ListNode) {
	for node := head; node != nil; node = node.Next {
		printVal("", node)
	}
}

func main() {
	head := buildLinkedList([]int{1, 1})
	// head := buildLinkedList([]int{1, 1, 2})
	// head := buildLinkedList([]int{1, 1, 2, 3, 3, 4, 4, 5,}) // 2, 5

	head = deleteDuplicates(head)

	fmt.Println("\n\nResult:")
	printLinkedList(head)
}

func printVal(label string, node *ListNode) {
	if node == nil {
		fmt.Println(label, "nil")
	} else {
		fmt.Println(label, node.Val)
	}
}

func deleteDuplicates(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	var prev *ListNode
	skip := -200
	node := head

	for {
		if node == nil {
			if prev != nil {
				prev.Next = nil
				return head
			}
			return node
		}

		skipping := node.Val == skip
		if !skipping {
			onLastNode := node.Next == nil
			if onLastNode {
				if prev != nil {
					prev.Next = node
					return head
				}

				return node
			} else {
				shouldSkip := node.Val == node.Next.Val
				if shouldSkip {
					skip = node.Val
				} else {
					if prev == nil {
						head = node
					} else {
						prev.Next = node
					}
					prev = node
				}
			}
		}
		node = node.Next
	}
}
