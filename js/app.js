'use strict';


var usr = prompt('What is your name');
alert('what a nice name, ' + usr );
console.log('name is ' + usr );


var usrFeeling = prompt('Are you feeling good today?');

if(usrFeeling.toLowerCase() === 'yes'|| usrFeeling.toLowerCase() === 'y'){
  alert('we are glad you are feeling good :)');
  console.log('user feeling is good' );
}
else if(usrFeeling.toLowerCase() === 'no'|| usrFeeling.toLowerCase() === 'n'){
  alert('we are sorry you are not feeling good :)');
  console.log('user feeling is not good' );
}


var qzGame = prompt('Are you up to a little game?');

if(qzGame.toLowerCase() === 'yes'|| qzGame.toLowerCase() === 'y'||qzGame.toLowerCase() ==='ok'){
  alert('welcome to the gussing GAME! Just Yes or No:)');
  console.log('Game starts' );

  var Q1 = prompt('Am I a long IT vet?');

  if (Q1.toLowerCase() === 'yes'|| Q1.toLowerCase() === 'y'){
    alert('Nah, Orginally I was in engineering filed');
    console.log('Nah, Orginally I was in engineering filed');
  }
  else if (Q1.toLowerCase() === 'no'|| Q1.toLowerCase() === 'n'){
    alert('Exactly, I am new to IT field');
    console.log('Exactly, I am new to It field');
  }

  var Q2 = prompt('Am I over 30ys?');

  if (Q1.toLowerCase() === 'yes'|| Q1.toLowerCase() === 'y'){
    alert('Nah, not an elderly yet!');
    console.log('Nah, not an elderly yet!');
  }
  else if (Q2.toLowerCase() === 'no'|| Q2.toLowerCase() === 'n'){
    alert('Indeed, nice guess!');
    console.log('Indeed, nice guess!');
  }

  var Q3 = prompt('Do I resides in JORDAN?');

  if (Q3.toLowerCase() === 'yes'|| Q3.toLowerCase() === 'y'){
    alert('In Jordan Buddy! ');
    console.log('In Jordan Buddy!');
  }
  else if (Q3.toLowerCase() === 'no'|| Q3.toLowerCase() === 'n'){
    alert('In Jordan Buddy!!!');
    console.log('In Jordan Buddy!!!');
  }

  var Q4 = prompt('Am I an LTUC stednt?');

  if (Q4.toLowerCase() === 'yes'|| Q4.toLowerCase() === 'y'){
    alert('right!, an ASAC student!');
    console.log('right!, an ASAC student!');
  }
  else if (Q4.toLowerCase() === 'no'|| Q4.toLowerCase() === 'n'){
    alert('In fact, i am an ASAC student!');
    console.log('In fact, i am an ASAC student');
  }



}
else if(usrFeeling.toLowerCase() === 'no'|| usrFeeling.toLowerCase() === 'n'){
  alert('sorry you are not into a little game, refresh if you had a change of heart!');
  console.log('user is not into the guessing game' );
}


