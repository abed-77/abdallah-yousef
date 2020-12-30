'use strict';


// var usr = prompt('What is your name');
// alert('what a nice name, ' + usr );
// console.log('name is ' + usr );


// var usrFeeling = prompt('Are you feeling good today?');

// if(usrFeeling.toLowerCase() === 'yes'|| usrFeeling.toLowerCase() === 'y'){
//   alert('we are glad you are feeling good :)');
//   console.log('user feeling is good' );
// }
// else if(usrFeeling.toLowerCase() === 'no'|| usrFeeling.toLowerCase() === 'n'){
//   alert('we are sorry you are not feeling good :)');
//   console.log('user feeling is not good' );
// }


// var qzGame = prompt('Are you up to a little game?');

// if(qzGame.toLowerCase() === 'yes'|| qzGame.toLowerCase() === 'y'||qzGame.toLowerCase() ==='ok'){
//   alert('welcome to the gussing GAME! Just Yes or No:)');
//   console.log('Game starts' );

//   var Q1 = prompt('Am I a long IT vet?');

//   if (Q1.toLowerCase() === 'yes'|| Q1.toLowerCase() === 'y'){
//     alert('Nah, Orginally I was in engineering filed');
//     console.log('Nah, Orginally I was in engineering filed');
//   }
//   else if (Q1.toLowerCase() === 'no'|| Q1.toLowerCase() === 'n'){
//     alert('Exactly, I am new to IT field');
//     console.log('Exactly, I am new to It field');
//   }

//   var Q2 = prompt('Am I over 30ys?');

//   if (Q2.toLowerCase() === 'yes'|| Q2.toLowerCase() === 'y'){
//     alert('Nah, not an elderly yet!');
//     console.log('Nah, not an elderly yet!');
//   }
//   else if (Q2.toLowerCase() === 'no'|| Q2.toLowerCase() === 'n'){
//     alert('Indeed, nice guess!');
//     console.log('Indeed, nice guess!');
//   }

//   var Q3 = prompt('Do I resides in JORDAN?');

//   if (Q3.toLowerCase() === 'yes'|| Q3.toLowerCase() === 'y'){
//     alert('In Jordan Buddy! ');
//     console.log('In Jordan Buddy!');
//   }
//   else if (Q3.toLowerCase() === 'no'|| Q3.toLowerCase() === 'n'){
//     alert('In Jordan Buddy!!!');
//     console.log('In Jordan Buddy!!!');
//   }

//   var Q4 = prompt('Am I an LTUC stednt?');

//   if (Q4.toLowerCase() === 'yes'|| Q4.toLowerCase() === 'y'){
//     alert('right!, an ASAC student!');
//     console.log('right!, an ASAC student!');
//   }
//   else if (Q4.toLowerCase() === 'no'|| Q4.toLowerCase() === 'n'){
//     alert('In fact, i am an ASAC student!');
//     console.log('In fact, i am an ASAC student');
//   }

  // var i =0;
  //   while (i < 4) {
  //   var Q5 = prompt('how about you guess my lucky number (4 tails)?');
    
  //   if (Q5 > 7){
  //       alert('too high, try again');
  //       console.log('too high number');
  //   }
  //   else if (Q5 < 7){
  //       alert('too low, try again');
  //       console.log('too low number');
  //   }
  //   else if (Q5 === 7){
  //       alert('BINGO. You got It!');
  //       console.log('Right Guess');
  //       i=4;
  //   }
  //     i = i + 1;
  // }
  // alert('My lucky number is 7!');

  var Q6Array =['lion','tiger','leoprad','rhinos', 'wolf', 'snake'];
  var j =0;
  var jj=0;
    while (j < 6) {
    var Q6 = prompt('Can you name one of forest predetors? trail left='+(6-j));
      while (jj<6){
        if (Q6 === Q6Array[jj]){
          alert('Bingo, That is right');
          console.log('Q6RightGuess');
          break;
          }
        else if (Q6 !== Q6Array[jj]){
          console.log('arrayIndex'+jj);
          jj=jj+1;
          }
      }
      if (Q6 === Q6Array[jj]){
        break;
      }

    j=j+1;
  }






// }
// else if(usrFeeling.toLowerCase() === 'no'|| usrFeeling.toLowerCase() === 'n'){
//   alert('sorry you are not into a little game, refresh if you had a change of heart!');
//   console.log('user is not into the guessing game' );
// }


