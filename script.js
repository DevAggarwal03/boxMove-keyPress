let canvas = document.querySelector("#canvas");
let c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener("keydown", function(e){
    if(e.key === "d"){
        left = true;
    }
    else if(e.key === "a"){
        right = true;
    }
    else if(e.key === "w"){
        up = true;
    }
    else if(e.key === "s"){
        down = true;
    }

})
document.addEventListener("keyup", function(e){
    if(e.key === "d"){
        left = false;
    }
    else if(e.key === "a"){
        right = false;
    }
    else if(e.key === "w"){
        up = false;
    }
    else if(e.key === "s"){
        down = false;
    }
})

function Rectangle(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.draw = function(){
        c.beginPath()
        c.rect(this.x, this.y, this.width, this.height)
        c.lineWidth = 10;
        c.strokeStyle = "blue"
        c.stroke()
        c.closePath()

    } 
    this.update = function(){
        if(left){
            this.x += 10;
            console.log("worked")
        }
        else if(right){
            this.x -= 10;
        }
        else if(up){
            this.y -= 10;
        }
        else if(down){
            this.y += 10;
        }

        this.draw();
    }
}

let rec = new Rectangle(190, 300, 80, 80);
// rec.draw()

let left = false;
let right = false;
let up = false;
let down = false;


function move(){
    requestAnimationFrame(move);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    rec.update();

}

move()