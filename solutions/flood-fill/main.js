/**
 * @param {number[][]} newImage
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {

    if (image[sr][sc] === color){
        return image
    }

    const newImage = JSON.parse(JSON.stringify(image)); 
	const mapKey = (nr, nc) => `${nr}:${nc}`

	origColor = newImage[sr][sc]
	const neighbors = { [mapKey(sr, sc)]: null }

	const addNeighbors = (sr, sc) => {
		const right = [sr, sc + 1]
		const left = [sr, sc - 1]
		const up = [sr + 1, sc]
		const down = [sr - 1, sc]

		Array(up, down, right, left).map(([nr, nc]) => {
			if (newImage[nr]?.[nc] === origColor) {
				neighbors[mapKey(nr, nc)] = null
			}
		})
	}

	while (Object.keys(neighbors).length) {
		const currPixel = Object.keys(neighbors)[0]
		const [currPixelR, currPixelC] = currPixel
			.split(':')
			.map((num) => parseInt(num))
		newImage[currPixelR][currPixelC] = color
		addNeighbors(currPixelR, currPixelC)
		delete neighbors[mapKey(currPixelR, currPixelC)]
	}

	return newImage
}

const printImage = (image) => {
    image?.map((row) => console.log(row))
    console.log('\n')
}


const image = [
	[1, 1, 1],
	[1, 1, 0],
	[1, 0, 1],
]

const results = floodFill(image, 1, 1, 2)

printImage(image)
printImage(results)



const image2 = [[0,0,0],[0,0,0]]

const results2 = floodFill(image2, 0,0,0)

printImage(image2)
printImage(results2)
