class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def mergeTwoLists(list1, list2):
    curr1 = list1
    curr2 = list2

    # handle inputs that == None 
    if (curr1 == None and curr2 == None):
        return None
    elif (curr1 == None):
        return curr2
    elif (curr2 == None):
        return curr1

    # initialize head value
    if curr1.val < curr2.val:
        head = ListNode(curr1.val)
        curr1 = curr1.next
    else:
        head = ListNode(curr2.val)
        curr2 = curr2.next

    prevNode = head

    while curr1 != None or curr2 != None:
        # handle lists that aren't equal length
        if curr1 == None:
            prevNode.next = curr2
            return head
        elif curr2 == None:
            prevNode.next = curr1
            return head

        if curr1.val < curr2.val:
            prevNode.next = ListNode(curr1.val)
            curr1 = curr1.next
        else:
            prevNode.next = ListNode(curr2.val)
            curr2 = curr2.next

        prevNode = prevNode.next

    return head


def generateLinkedListFromList(list):
    head = ListNode(None)
    prevNode = None

    for i, value in enumerate(list):
        if i == 0:
            head.val = value
            prevNode = head
        
        else:
            currentNode = ListNode(value) 
            prevNode.next = currentNode
            prevNode = currentNode
    
    return head


def printLinkedList(head):
    if (head == None):
        print(head, '\n')
        return

    currentNode = head
    while currentNode != None:
        print(currentNode.val)
        currentNode = currentNode.next
    print()


list1 = generateLinkedListFromList([1,2,4])
list2 = generateLinkedListFromList([1,3,4])
newList = mergeTwoLists(list1, list2)
printLinkedList(newList)

list1 = None
list2 = None
newList = mergeTwoLists(list1, list2)
printLinkedList(newList)

list1 = None
list2 = generateLinkedListFromList([0])
newList = mergeTwoLists(list1, list2)
printLinkedList(newList)

list1 = generateLinkedListFromList([1,3,5,7,9,11,13])
list2 = generateLinkedListFromList([2,4,6])
newList = mergeTwoLists(list1, list2)
printLinkedList(newList)
