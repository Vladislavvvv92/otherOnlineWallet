let canvas = document.getElementById('canvasLines');
let ctx = canvas.getContext('2d');

let canvasCenterVertikal = canvas.width / 2;
let stepFly = 1;
let acumulatorStepFly = 0;

function drawVertikalLine() {

    ctx.moveTo(canvasCenterVertikal, canvas.height);
    ctx.lineTo(canvasCenterVertikal, 0);
    ctx.strokeStyle = 'orange';
    ctx.strokeWidth = 5;
    ctx.lineCap = 'round';
    ctx.stroke();
    let stepLineRigth = 50;
    let stepLineLeft = -50;
    for (let i = canvasCenterVertikal; i < canvas.width;) {
        ctx.beginPath();
        ctx.moveTo(canvasCenterVertikal + stepLineRigth, canvas.height);
        ctx.lineTo(canvasCenterVertikal + stepLineRigth + 40, 0);
        ctx.strokeStyle = 'orange';
        ctx.lineCap = 'round';
        ctx.stroke();
        i += 50;
        stepLineRigth += 50;

    }
    for (let i = canvasCenterVertikal; i > 0;) {
        ctx.beginPath();
        ctx.moveTo(canvasCenterVertikal + stepLineLeft, canvas.height);
        ctx.lineTo(canvasCenterVertikal + stepLineLeft - 40, 0);
        ctx.strokeStyle = 'orange';
        ctx.lineCap = 'round';
        ctx.stroke();
        i -= 50;
        stepLineLeft -= 50
    }

}

function drawHorizontalLine() {
    let stepHorizontalLine = 50;


    for (let i = 0; i < 50 * 15;) {
        ctx.beginPath()
        ctx.moveTo(0, i + acumulatorStepFly);
        ctx.lineTo(canvas.width, i + acumulatorStepFly);
        ctx.strokeStyle = 'orange';
        ctx.strokeWidth = 5;
        ctx.lineCap = 'round';
        ctx.stroke();
        i+=50;



    }
    acumulatorStepFly +=stepFly;
    if (acumulatorStepFly > 50) {
        acumulatorStepFly = 0;
    }
console.log(stepFly)
console.log(acumulatorStepFly)

}
setInterval(function () {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawVertikalLine();
    drawHorizontalLine();
},10)
