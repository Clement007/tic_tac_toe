const tiles = document.querySelectorAll(".tile");
const PLAYER_X = "X";
const PLAYER_O = "O";
let turn = PLAYER_X;

const boardState = Array(tiles.length);
//if(tile.innerText)
boardState.fill(null);

//Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");
//Sounds
const gameOverSound = new Audio("sounds/game-over.mp3");
const clickSound         = new Audio("sounds/click.wav");
tiles.forEach((tile) =>tile.addEventListener("click", tileClick));

function setHoverText(){
	//remove all hover text
	tiles.forEach((tiles) =>{
    tile.classList.remove("x-hover");
    tile.classList.remove("o-hover");

});
	const hoverClass ='${turn.toLowerCase()}-hover'; 
}

function tileClick(event){
	if (gameOverArea.classList.contains("visible")){
		return;
	}

	const tile = event.target;
	const tileNumber = tile.dataset.index;
	if(tile.innerText !=""){
		return;
	}
	if(turn === PLAYER_X){
		tile.innerText = PLAYER_X
		boardState[tileNumber -1] = PLAYER_X;
		turn = PLAYER_O;
	}else {
		tile.innerText = PLAYER_O;
		boardState[tileNumber - 1] = PLAYER_O
		turn = PLAYER_X;
	}
	//clickSound.play();
} 