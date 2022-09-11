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
	const gameboard = [" "];
	return{
		gameboard
	}
})();

// TODO: Store players in objects.
const Player = (name, mark) => {
	this.name = name;
	this.mark = mark;
	return{ name, mark }
	
} 

// TODO: Create the flow of the game. 
const displayController = (() => {

	const Player1 = Player('Player 1', "X");
	const Player2 = Player('Player 2', "O");

	let currentPlayer = Player1;

	let draw = 0;
	
	const cell = document.querySelectorAll('.cell');
	cell.forEach( cell => 
		cell.addEventListener('click', e => {
			let id = e.target.id;

			if (!cell[id]) {
				Gameboard.gameboard[id] = currentPlayer;
				e.target.innerText = currentPlayer.mark;
				console.log(currentPlayer.mark)
				
				checkWinner();
				console.log(Gameboard.gameboard)
				checkTie();
				switchPlayer();
				
				
			}
			 
		})
	)

	const switchPlayer = () => {
		
		currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
		return { currentPlayer }
	}

	//TODO: create winning combo
	const winCombo = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];
	 
	//TODO: check winner
	const checkWinner = () => {

		// Iterate through each winning combo 
		winCombo.forEach(combo => {

			// Check if board cells has same Player mark
			let result = combo.every(index => Gameboard.gameboard[index] === currentPlayer)
			
			// If winning combo exists ...
			if (result){
				// Declare winner to browser
				const winner = document.querySelector('#winner');
				winner.innerText = `${currentPlayer.name} won!`;
			}

		})

	}

	
	//TODO: check tie
	
	const checkTie = () => {
		draw++
		if (draw === 9) {
			winner.innerText = `Game Over! Tie!`;
		}
	}

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
		currentPlayer = Player1;
		Gameboard.gameboard=[" "];
		draw = 0;
		};

	restart.addEventListener('click', replay); 
})();
 




