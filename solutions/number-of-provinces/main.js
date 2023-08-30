/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
	const groupNodes = {
		// groupID: [nodeA, nodeB, nodeC]
	}

	const nodeGroup = {
		// nodeA: groupID
		// nodeB: groupID
		// nodeC: groupID
	}

	const nodes = isConnected

	const mergeGroups = (bigGroup, smallGroup) => {
		groupNodes[smallGroup].forEach((node) => {
			nodeGroup[node] = bigGroup
		})

		groupNodes[bigGroup] = [...groupNodes[bigGroup], ...groupNodes[smallGroup]]
		delete groupNodes[smallGroup]
	}

	Object.entries(nodes).forEach(([nodeA, connections]) => {
		Object.entries(connections).forEach(([nodeB, connected]) => {
            
            if (connected) {
                const nodeAGroup = nodeGroup?.[nodeA]
				const nodeBGroup = nodeGroup?.[nodeB]

				if (nodeAGroup && nodeBGroup) {
					if (nodeAGroup !== nodeBGroup) {
						const groupAIsSmaller =
							groupNodes[nodeAGroup].length > groupNodes[nodeBGroup].length
						if (groupAIsSmaller) {
							mergeGroups(nodeAGroup, nodeBGroup)
						} else {
							mergeGroups(nodeBGroup, nodeAGroup)
						}
					}
				} else if (nodeAGroup) {
					groupNodes[nodeAGroup].push(nodeB)
					nodeGroup[nodeB] = nodeAGroup
				} else if (nodeBGroup) {
					groupNodes[nodeBGroup].push(nodeA)
					nodeGroup[nodeA] = nodeBGroup
				} else {
					// create new group
					groupNodes[nodeA] = [nodeA, nodeB]
					nodeGroup[nodeA] = nodeA
					nodeGroup[nodeB] = nodeA
				}
			}
		})
	})

	return Object.keys(groupNodes).length
}

const x = [
	[1, 0, 0, 1],
	[0, 1, 1, 0],
	[0, 1, 1, 1],
	[1, 0, 1, 1],
]
console.log(findCircleNum(x))
