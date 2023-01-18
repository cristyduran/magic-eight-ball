/*let userName = 'cristy'

userName ? console.log(`hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Is he the one?'
console.log(`${userName} asks, ${userQuestion}`);

randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);*/


/*switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1: 
  eightBall = 'It is decidedly so';
  break;
   case 2: 
  eightBall = 'Reply hazy. Try again';
  break;
   case 3: 
  eightBall = 'Cannot predict now';
  break;
   case 4: 
  eightBall = 'Do not count on it';
  break;
   case 5: 
  eightBall = 'My sources say no';
  break;
   case 6: 
  eightBall = 'Outlook not so good';
  break;
   case 7: 
  eightBall = 'Signs point to yes';
  break;
} */

/*console.log(`The magic Eight Ball says, ${eightBall}.`);*/


let fortunes = ['It is certain', 'It is decidedly so', 'Reply hazy. Try again',
'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good',
'Signs point to yes']

let button = document.getElementById('fortuneGeneratorButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
}

button.addEventListener('click', showFortune);