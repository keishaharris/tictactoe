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
	 
	//check winner
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

	
	//check tie
	
	const checkTie = () => {
		draw++
		if (draw === 9) {
			winner.innerText = `Game Over! Tie!`;
		}
	}

	//restart Game
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
 




