const winner = document.querySelector('#winner');
const cells = document.querySelectorAll('.cell');
const restart = document.querySelector('#restart');

//const isWINNER = [[spaces[0],spaces[1],spaces[2]], [spaces[3],spaces[4],spaces[5]],[spaces[6],spaces[7],spaces[8]],
//[spaces[0],spaces[3],spaces[3]],[spaces[2],spaces[5],spaces[8]],[spaces[1],spaces[4],spaces[7],[spaces[0],spaces[4],spaces[4]],
//[spaces[2],spaces[4],spaces[6]]];

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
