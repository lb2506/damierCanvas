'use strict'

var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let SquaresOnWidth = 20;
let gap = 2;
let height = (canvas.width / SquaresOnWidth)-gap;
let width = (canvas.width / SquaresOnWidth)-gap;
let speed = 30;
let incrementX = 0;
let i = 0;
let delta = 0;


let draw = function(ctx){

    ctx.fillStyle = `rgb(` + Math.floor(Math.random() * 255) + `,` + Math.floor(Math.random() * 255) + `,` + Math.floor(Math.random() * 255) + `)`;
    render(ctx);
}

let render = function(ctx){

    if (i<=(canvas.height - height)){
        ctx.clearRect(incrementX-1, -1, width+2, height+2);
        ctx.translate(0, speed);
        ctx.fillRect(incrementX, 0, width, height);
        i+=speed;

    } else { 
        incrementX += width+gap;
        delta = i;      
        ctx.fillStyle = `rgb(` + Math.floor(Math.random() * 255) + `,` + Math.floor(Math.random() * 255) + `,` + Math.floor(Math.random() * 255) + `)`;
        ctx.translate(0, -delta);
        ctx.fillRect(incrementX, 0, width, height);
        i = 0;
    }

    if (incrementX >= canvas.width){
        incrementX = 0;
        i = 0;
        ctx.translate(0, 0 - height-gap);
    }

    
    requestAnimationFrame(() => render(ctx))
    
}


class Canvas{
    static init(){     
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            draw(ctx)
        }
    }
}

export default Canvas