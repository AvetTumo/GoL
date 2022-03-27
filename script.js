var Square = require("./module");
var mySquareObject = new Square(5);

function main() {
   console.log(mySquareObject.getArea());
}
main();

var fs = require('fs');

function main(){
   var file  = "hello.txt";
   fs.appendFileSync(file, "Hello world\n");
}
main();

matrix = []

grassArr = []
grassEaterArr = []
PredatorArr = []
flowerArr = []






let side = 10

function generateMatrix(size, grassCount, grassEaterCounter, predatorCounter, flowerCounter) {

    for (let y = 0; y < size; y++) {
        matrix[y] = []
        for (let x = 0; x < size; x++) {
            matrix[y].push(0)
        }
    }


    for (let i = 0; i < grassCount; i++) {
        let x = Math.round(Math.random() * (size - 1))
        let y = Math.round(Math.random() * (size - 1))
        if (matrix[x][y] == 0) {
            new Grass(x, y)
        } else {
            i--
        }
    }

    for (let i = 0; i < grassEaterCounter; i++) {
        let x = Math.round(Math.random() * (size - 1))
        let y = Math.round(Math.random() * (size - 1))
        if (matrix[x][y] == 0) {
            new GrassEater(x, y)
        } else {
            i--
        }
    }

    for (let i = 0; i < predatorCounter; i++) {
        let x = Math.round(Math.random() * (size - 1))
        let y = Math.round(Math.random() * (size - 1))
        if (matrix[x][y] == 0) {
            new Predator(x, y)
        } else {
            i--
        }
    }

    for (let i = 0; i < flowerCounter; i++) {
        let x = Math.round(Math.random() * (size - 1))
        let y = Math.round(Math.random() * (size - 1))
        if (matrix[x][y] == 0) {
            new Flower(x, y)
        } else {
            i--
        }
    }
}

generateMatrix(50, 10, 10, 50, 5)
console.log(matrix)

function setup() {
    createCanvas(matrix.length * side + 1, matrix.length * side + 1)
    background("#acacac")



}



function draw() {
    frameRate(5)
    fill("#acacac")

    for (let y = 0; y < 50; y++) {
        for (let x = 0; x < 50; x++) {
            if (matrix[y][x] == 0) {
                fill("#bf6c5c")
            }
            else if (matrix[y][x] == 1) {
                fill("green")
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("pink")
            }

            rect(x * side, y * side, side, side)
        }
    }
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in PredatorArr) {
        PredatorArr[i].start()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].start()
    }

    for (let i in PredatorArr) {
        PredatorArr[i].start()
    }

    for (let i in flowerArr) {
        flowerArr[i].mul()
    }


}
