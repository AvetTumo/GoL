class Grass extends LivingCreature {

    
    mul() {
        this.multiply++

        this.multiply = 0
        let emptyCells = this.chooseCell(0)
        if (emptyCells.length > 0) {
            let randIndex = Math.round(Math.random() * (emptyCells.length - 1))
            let x = emptyCells[randIndex][0]
            let y = emptyCells[randIndex][1]

            matrix[y][x] = 1
            new Grass(x, y)
        }

    }
}