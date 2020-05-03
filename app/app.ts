// starting a new game
let startGame = () => {

  let playerName: string | undefined = getInputValue('playername');

  logPlayer(playerName);

  postScore(100, playerName);
}


//Function to get the value from the input window
let getInputValue = (elementID: string): string | undefined => {

  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === '') {
    return 'Please enter User name';
  } else {
    inputElement.value;
  }

  return inputElement.value

}

//Function to display input value on the screen
// scoreElement! - equivalent to scoreElement !== null
let postScore = (score: number | undefined, playerName: string | undefined): void => {

  const scoreElement: HTMLLIElement = <HTMLLIElement>document.getElementById('postedScores');

  scoreElement!.innerText = `${score} - ${playerName}`;

}

document.getElementById('startGame')!.addEventListener('click', startGame);

//Example function to show how type annotation works. Not to be used in the app
let logPlayer = (name: string | undefined = 'John'): void => console.log(`${name} is starting a new game.`);
