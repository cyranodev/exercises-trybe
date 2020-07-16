let pecaXadrez = "2";

if (typeof pecaXadrez == 'string') {
  let pecaLowerCase = pecaXadrez.toLowerCase();
  switch (pecaLowerCase) {
    case 'pawn':
      console.log(pecaLowerCase,'-> one or two squares forward');
      break;
    case 'knight':
      console.log(pecaLowerCase,'-> moves in L-shaped strikes');
      break;
    case 'bishop':
      console.log(pecaLowerCase,'-> moves in diagonals');
      break;
    case 'rook':
      console.log(pecaLowerCase,'-> moves in straight lines');
      break;
    case 'queen':
      console.log(pecaLowerCase,'-> moves in straight or diagonal lines');
      break;
    case 'king':
      console.log(pecaLowerCase,'-> moves to any square closest to him');
      break;
    default:
      console.log("That's not a chess piece, lad.");
  }
}
else {
  console.log('invalid variable type for chess piece.');
}