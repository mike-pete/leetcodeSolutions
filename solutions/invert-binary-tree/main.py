# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if (not root):
            return root

        tmp = root.right
        root.right = root.left
        root.left = tmp

        if (root.right):
            self.invertTree(root.right)
        
        if (root.left):
            self.invertTree(root.left)

        return root