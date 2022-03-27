class GrassEater extends LivingCreature {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 10
        this.directions = [];

        matrix[y][x] = 2
        grassEaterArr.push(this)
    }

    updateDirection() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(n) {
        this.updateDirection()
        return super.chooseCell(n)
    }

    start() {

        if (this.chooseCell(1).length || this.chooseCell(4).length) {
            this.eat()
        }
        else if (this.chooseCell(0).length > 0) {
            this.move()
        }
        if (this.energy >= 20) {
            this.mul()
        }
        if (this.energy <= 0) {
            this.die()
        }
    }

    move() {
        this.energy--
        this.frame++

        let found = this.chooseCell(0)
        let exact = random(found)

        if (exact) {

            let x = exact[0]
            let y = exact[1]


            matrix[y][x] = 2
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }


    }

    eat() {
        this.energy += 2
        let found = this.chooseCell(1)
        let found1 = this.chooseCell(4)

        let exact = random(found)
        let exact1 = random(found1)

        if (exact) {
            let x = exact[0]
            let y = exact[1]

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                }
            }

            matrix[y][x] = 2

            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }
        if (exact1) {
            let x = exact1[0]
            let y = exact1[1]

            for (let i = 0; i < flowerArr.length; i++) {
                if (flowerArr[i].x == x && flowerArr[i].y == y) {
                    flowerArr.splice(i, 1);
                }
            }
            matrix[y][x] = 2

            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }
    }

    die() {
        matrix[this.y][this.x] = 0

        for (let i = 0; i < grassEaterArr.length; i++) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1);
            }

        }

    }

    mul() {

        if (this.energy >= 20) {
            this.energy = 10
            let emptyCells = this.chooseCell(0)
            if (emptyCells.length > 0) {
                let randIndex = Math.round(Math.random() * (emptyCells.length - 1))
                let x = emptyCells[randIndex][0]
                let y = emptyCells[randIndex][1]

                matrix[y][x] = 2
                new GrassEater(x, y)
            }
        }

    }

}