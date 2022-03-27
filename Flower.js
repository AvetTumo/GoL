class Flower extends LivingCreature {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiply = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        matrix[y][x] = 4
        flowerArr.push(this)
    }

    chooseCell(n) {
        let found = []

        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]

            if (x >= 0 && y >= 0 && x < matrix.length && y < matrix.length) {
                if (matrix[y][x] == n) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }

    mul() {
        this.multiply++
        if (this.multiply == 5) {
            this.multiply = 0
            let emptyCells = this.chooseCell(0)
            if (emptyCells.length > 0) {
                let randIndex = Math.round(Math.random() * (emptyCells.length - 1))
                let x = emptyCells[randIndex][0]
                let y = emptyCells[randIndex][1]

                matrix[y][x] = 4
                new Flower(x, y)
            }
        }

    }
}