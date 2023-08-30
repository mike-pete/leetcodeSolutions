package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	ll := ListNode{Val: 1, Next: &ListNode{Val: 1, Next: &ListNode{Val: 1, Next: &ListNode{Val: 3, Next: nil}}}}
	deleteDuplicates(&ll)

	for node := &ll; node != nil; node = node.Next {
		fmt.Println("node", node.Val)
	}
}

func deleteDuplicates(head *ListNode) *ListNode {
	if head == nil {
		return head
	}

	prevNode := head

	for node := head.Next; node != nil; node = node.Next{
		val := node.Val
		prevVal := prevNode.Val

		if val == prevVal{
			prevNode.Next = node.Next
		} else {
			prevNode = node
		}
	}
	
	return head
}
