# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        number = []

        cursor = head
        while (cursor):
            number.append(cursor.val)
            cursor = cursor.next


        forwardIndex = 0
        backwardIndex = len(number) - 1

        for i in range(len(number)//2):
            forwardNum = number[forwardIndex]
            backwardNum = number[backwardIndex]

            if (forwardNum != backwardNum):
                return False

            forwardIndex += 1
            backwardIndex -= 1
        
        return True

