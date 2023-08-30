package main

import "fmt"

func main() {
	l1 := BuildLinkedList([]int{9, 9, 9, 9, 9, 9, 9})
	l2 := BuildLinkedList([]int{9, 9, 9, 9})
	sum := addTwoNumbers(l1, l2)
	fmt.Println("Return:")
	PrintLinkedList(sum)
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) (head *ListNode) {
	head = new(ListNode)
	sum := head
	carry := 0
	for l1 != nil || l2 != nil || carry > 0 {
		tmpSum := nodeVal(l1) + nodeVal(l2) + carry
		carry = 0
		if tmpSum >= 10 {
			carry = 1
		}``

		sum.Val = tmpSum % 10

		l1 = nextNode(l1)
		l2 = nextNode(l2)

		if l1 != nil || l2 != nil || carry > 0 {
			sum.Next = new(ListNode)
			sum = sum.Next
		}
	}
	return
}

func nodeVal(node *ListNode) int {
	if node == nil {
		return 0
	}
	return node.Val
}

func nextNode(node *ListNode) *ListNode {
	if node != nil && node.Next != nil {
		return node.Next
	}
	return nil
}

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
	// fmt.Println("hmm", head.Next.Val)
	for node := head; node != nil; node = node.Next {
		fmt.Println(node.Val)
	}
}

func PrintVal(node *ListNode) {
	if node == nil {
		fmt.Println("nil")
	} else {
		fmt.Println(node.Val)
	}
}
