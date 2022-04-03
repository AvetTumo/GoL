let LivingCreature = require('./LivingCreature')

module.exports = class Flower extends LivingCreature {


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