// Game Constants & Variables
let inputDir = {x:0, y:0};
const foodSound = new Audio('./music/food.mp3');
const gameOverSound = new Audio('./music/gameover.mp3');
const moveSound = new Audio('./music/move.mp3');
const musicSound = new Audio('./music/music.mp3');
let speed = 2;
let score = 0
let lastPaintTime = 0;
let snakeArr = [
    {x:13, y:15}
]
food = {x:6, y:7}


// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    //console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(sarr){
    return false;
}

function gameEngine(){
    // Part 1: Updating the snake array & food
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x:0, y:0};
        alert("Game Over. Press any key to play again!")
        snakeArr = [{x:13, y:15}];
        musicSound.play();
        score = 0;


    }

    // If you have eaten the food, increment score and regerate food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x, 
                          y:snakeArr[0].y + inputDir.y
                        });
        let a = 2;
        let b = 16;
        food = {x:Math.round(a + (b-a)*Math.random()),
                y:Math.round(a + (b-a)*Math.random())}
    }

    // Moving the snake
    for (let i = snakeArr.length-2; i>=0; i--) {
        const element = array[i];
        snakeArr[i+1] = {...snakeArr[i]};
        
    }

    // Part 2: Display the snake and food
    // Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e,index) =>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index===0){
            snakeElement.classList.add('head')
        }
        else{
        snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}




// main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputDir = {x:0, y:1} // Start the game
    moveSound.play();
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});
