const winner = document.querySelector('#winner');
const cells = document.querySelectorAll('.cell');
const restart = document.querySelector('#restart');



const drawBoard = () => {
	cells.forEach((cell, i) => {
		let border = '';
		if (i < 3){
			border += 'border-bottom: 10px solid #FFC300;';
		}
		if (i > 5) {
			border += 'border-top: 10px solid #FFC300;';
		}
		if (i % 3 === 0) {
			border += 'border-right: 10px solid #FFC300;';
		} 
		if (i % 3 === 2) {
			border += 'border-left: 10px solid #FFC300;';
		}
		cell.style = border;
		cell.addEventListener('click', boxClicked);
	});
};


let spaces = [];
const tick_x = 'X';
const tick_o = 'O';
let currentPlayer = tick_x;

const boxClicked = (e) => {
	let id = e.target.id;
	if (!spaces[id]) {
		spaces[id] = currentPlayer;
		e.target.innerText = currentPlayer;
		

		if (playerWon()) {
			winner.innerText = `${currentPlayer} won!`;
			replay();
		}

		tieGame();
	
	currentPlayer = currentPlayer === tick_x ? tick_o : tick_x;
	
	}
};

const playerWon = () => {
	if (spaces[0] === currentPlayer && spaces[1] === currentPlayer  && spaces[2] === currentPlayer) {
		return true;
	}
	
	if (spaces[3] === currentPlayer && spaces[4] === currentPlayer && spaces[5] === currentPlayer) {
		return true;
	}

	if (spaces[6] === currentPlayer && spaces[7] === currentPlayer && spaces[8] === currentPlayer) {
		return true;
	}

	if (spaces[0] === currentPlayer && spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
		return true;
	}

	if (spaces[2] === currentPlayer && spaces[5] === currentPlayer && spaces[8] === currentPlayer) {
		return true;
	}

	if (spaces[1] === currentPlayer && spaces[4] === currentPlayer && spaces[7] === currentPlayer) {
		return true;
	}

	if (spaces[0] === currentPlayer && spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
		return true;
	}

	if (spaces[2] === currentPlayer && spaces[4] === currentPlayer && spaces[6] === currentPlayer) {
		return true;
	}
};


const tieGame = () => {
	let draw = 0;
	spaces.forEach((space, i) => {
		if (spaces[i] !== null) 
			draw++;
	})
	if (draw === 9) {
		winner.innerText = `Game Over! Tie!`;
		replay();
	}
}

const replay = () => {
	setTimeout(() => {
		spaces.forEach((space,i) => {
		spaces[i] = null;
	});
	cells.forEach((cell)=> {
		cell.innerText='';
		winner.innerText='';
	});
}, 1000);
};

restart.addEventListener('click', replay);


drawBoard();

// 1. Store Gameboard as an array inside of a Gameboard object.
const Gameboard = (()=> {
	const gameboard = ["","","",
					   "","","",
					   "","",""
					];
	return{gameboard}
})();

// 2. Store players in objects.
const Player = (mark) => {
	this.mark = mark;
	return{ mark }
	
} 

// 3. Create the flow of the game. 

const displayController = (()  => {

})