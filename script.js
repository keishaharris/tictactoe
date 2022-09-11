// const winner = document.querySelector('#winner');
// const cells = document.querySelectorAll('.cell');
// const restart = document.querySelector('#restart');



// const drawBoard = () => {
// 	cells.forEach((cell, i) => {
// 		let border = '';
// 		if (i < 3){
// 			border += 'border-bottom: 10px solid #FFC300;';
// 		}
// 		if (i > 5) {
// 			border += 'border-top: 10px solid #FFC300;';
// 		}
// 		if (i % 3 === 0) {
// 			border += 'border-right: 10px solid #FFC300;';
// 		} 
// 		if (i % 3 === 2) {
// 			border += 'border-left: 10px solid #FFC300;';
// 		}
// 		cell.style = border;
// 		cell.addEventListener('click', boxClicked);
// 	});
// };


// let spaces = [];
// const tick_x = 'X';
// const tick_o = 'O';
// let currentPlayer = tick_x;

// const boxClicked = (e) => {
// 	let id = e.target.id;
// 	if (!spaces[id]) {
// 		spaces[id] = currentPlayer;
// 		e.target.innerText = currentPlayer;
		

// 		if (playerWon()) {
// 			winner.innerText = `${currentPlayer} won!`;
// 			replay();
// 		}

// 		tieGame();
	
// 	currentPlayer = currentPlayer === tick_x ? tick_o : tick_x;
	
// 	}
// };

// const playerWon = () => {
// 	if (spaces[0] === currentPlayer && spaces[1] === currentPlayer  && spaces[2] === currentPlayer) {
// 		return true;
// 	}
	
// 	if (spaces[3] === currentPlayer && spaces[4] === currentPlayer && spaces[5] === currentPlayer) {
// 		return true;
// 	}

// 	if (spaces[6] === currentPlayer && spaces[7] === currentPlayer && spaces[8] === currentPlayer) {
// 		return true;
// 	}

// 	if (spaces[0] === currentPlayer && spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
// 		return true;
// 	}

// 	if (spaces[2] === currentPlayer && spaces[5] === currentPlayer && spaces[8] === currentPlayer) {
// 		return true;
// 	}

// 	if (spaces[1] === currentPlayer && spaces[4] === currentPlayer && spaces[7] === currentPlayer) {
// 		return true;
// 	}

// 	if (spaces[0] === currentPlayer && spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
// 		return true;
// 	}

// 	if (spaces[2] === currentPlayer && spaces[4] === currentPlayer && spaces[6] === currentPlayer) {
// 		return true;
// 	}
// };


// const tieGame = () => {
// 	let draw = 0;
// 	spaces.forEach((space, i) => {
// 		if (spaces[i] !== null) 
// 			draw++;
// 	})
// 	if (draw === 9) {
// 		winner.innerText = `Game Over! Tie!`;
// 		replay();
// 	}
// }

// const replay = () => {
// 	setTimeout(() => {
// 		spaces.forEach((space,i) => {
// 		spaces[i] = null;
// 	});
// 	cells.forEach((cell)=> {
// 		cell.innerText='';
// 		winner.innerText='';
// 	});
// }, 1000);
// };

// restart.addEventListener('click', replay);


// drawBoard();

// TODO: Store Gameboard as an array inside of a Gameboard object.
const Gameboard = (()=> {
	const gameboard = ["x"];
	return{
		gameboard
	}
})();

// TODO: Store players in objects.
const Player = (mark) => {
	this.mark = mark;
	return{ mark }
	
} 

// TODO: Create the flow of the game. 
const displayController = (() => {

	const Player1 = Player("X");
	const Player2 = Player("O");
	let currentPlayer = Player1;

	const cell = document.querySelectorAll('.cell');
	cell.forEach( cell => 
		cell.addEventListener('click', e => {
			let id = e.target.id;

			if (!cell[id]) {
				cell[id] = currentPlayer;
				e.target.innerText = currentPlayer.mark;
				console.log(currentPlayer.mark)

				switchPlayer();
			}
			 
		})
	)

	const switchPlayer = () => {
		
		currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
		return { currentPlayer }
	}

	//TODO: create winning combo
	 
	//TODO: check winner
	//TODO: check tie

	//TODO: restart Game
	const replay = () => {
		setTimeout(() => {
			cell.forEach((cell,i) => {
			cell[i] = null;
		});
		cell.forEach((cell)=> {
			cell.innerText='';
			winner.innerText='';
		});
		}, 1);
		};

	restart.addEventListener('click', replay); 
})();
 




