/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	let cursor = head
	let cursorBack = head
	let nodeCount = 1

	// iterate through linked list and count nodes
	while (cursor.next) {
		nodeCount += 1
		cursor = cursor.next
	}

	// handle small linked lists
	if (nodeCount <= 2) {
		return
	}

	// move cursorBack to center of linked list
	for (let i = 0; i < nodeCount / 2; i++) {
		cursorBack = cursorBack.next
	}

	// flip the linked list direction (for the second half of the list)
	let prevNode = cursorBack
    cursorBack = cursorBack.next
	while (cursorBack.next) {
		const nextNode = cursorBack.next
		cursorBack.next = prevNode
		prevNode = cursorBack
		cursorBack = nextNode ? nextNode : prevNode
	}

	// then iterate towards the center and reorder the linked list
    cursor = head.next
    head.next = cursorBack

    while (cursor.next){
        const nextNode = cursor.next
        const nextBack = cursorBack?.next
		cursor.next = cursorBack

        if (nextBack){
            cursorBack.next = nextNode
            cursor = nextNode
            cursorBack = nextBack
        }
    }
    cursor.next = undefined
}

// const iterateLinkedList = (head) => {
//     const cursor = head
//     while(cursor.next){
//         console.log(cursor.val)

//     }
// }