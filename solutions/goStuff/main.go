package goStuff

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func BuildLinkedList(arr []int) (head *ListNode) {
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

func PrintLinkedList(head *ListNode) {
	for node := head; node != nil; node = node.Next {
		PrintNode(node)
	}
}

func PrintNode(node *ListNode) {
	if node == nil {
		fmt.Println("nil")
	} else {
		fmt.Println(node.Val)
	}
}
