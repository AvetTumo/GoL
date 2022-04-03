//նորից սոքեթը փոխանցիր փոփոխականիդ
var socket = io();

//էստեղ նախկին սկրիպտ ֆայլիցդ տպում և էստեղ ես բերում setup ֆունկցիան
 side = 10

function setup() {
    createCanvas(25 * side, 26 * side);
    background("#acacac");
}

// էստեղ բերում դնում ես նախկին սկրիպտ ֆայլիդ draw  ֆունկցիան, սակայն անունը փոխում ես
// դնում ես օրինաաաաակ նկարել, կամ ուրիշ բան
function nkarel(matrix) {
    console.log(matrix);
    
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        var obj = matrix[y][x];
        // ուշադիր եղիր, դու այս տողերը գրելուց դեռ քո մատրիցը օբյեկտներով չես լցրել
        //հետևաբար մի գրի obj.index, որովհետև տվյալ տեղում միայն դեռ թիվ է և 
        //ըստ այդ թվի դու ուղղակի ուզում ես ներկել մատրիցդ
        if (obj == 1) {
            fill("green");
        }
        else if (obj == 2) {
            fill("yellow");
        }
        rect(x * side, y * side, side, side);
    }
}

}
// քանի որ այժմ չունենք draw ֆունկցիա, որ ավտոմատ կանչվի, այդ պատճառով այն կանչում ենք 
// setInterval մեթոդի մեջ:
//էստեղ կլիենտը լսողն է: on մեթոդը լսելով send matrix հրամանը, կատարում է նկարել ֆունկցիան
// և որպես արգումենտ վերցնում սերվերի մատրիցը լցնելուց հետո գրված emit-ի մատրիցը:
setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)

function addGrassEater() {
    socket.emit("add grassEater")
}

function addGrass() {
    socket.emit("add grass")
}

//էստեղ այսքանը, հիմա նորից գնա սերվեր ֆայլ