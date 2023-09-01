var levelOrder = function (root) {
	if (!root) {
		return []
	}

	const finalArray = []
	let currentLevel = [root]

	while (currentLevel.length) {
	    const valueArray = []
	    const nextLevel = []

		for (const node of currentLevel) {
			valueArray.push(node.val)
			node.left && nextLevel.push(node.left)
			node.right && nextLevel.push(node.right)
		}

        finalArray.push(valueArray)
        currentLevel = nextLevel
	}

	return finalArray
}
