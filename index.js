import { deck, users } from './setup.js';

//Given a deck of cards
//Write a function that draw x cards and tell the user the remaining number of cards in each suit and each value
//
//i.e.
// {
//  hand:
//  [
//   {
//     suit: "Clubs",
//     value: "7"
//   },
//   ...
// ],
//   remainingSuits: {
//     spades: 1,
//     hearts: 2,
//     ...
//   },
//   remainingValues: {
//     A: 2,
//     K: 2,
//     Q: 3,
//     ...
//   }
// }

function drawCards(deck, num){
  //for the number of cards drawn
  //if (num >=0){
    //console.log(deck.pop().suit);
    
    //drawCards(deck,num-1);
  //}

  //deck.pop()
  const map = new Map();
  const hand = [];
  const remainingSuits = new Object();
  //const remainingSuits = []
  const remainingValues = new Object();
  //const remainingValues = []
  for (let i = 0; i < num; i++) {

  hand.push(deck.pop());
  }
  //get the values of remianing suits and values
  const suitSet = new Set();
  const valSet = new Set();
  for(let i=0; i < deck.length; i++){
    if(suitSet.has(deck[i].suit)){

      remainingSuits[deck[i].suit] +=1;
    };
    if(valSet.has(deck[i].value)){
      remainingValues[deck[i].value] +=1;
      console.log("add occurence of that value");
    }
    else{
  
    remainingSuits[deck[i].suit] =1;
    remainingValues[deck[i].value] =1;

    //console.log(deck[i].suit);
    //console.log(deck[i].value);
    valSet.add(deck[i].value);
    suitSet.add(deck[i].suit);}
  }
  return {remainingSuits,remainingValues};
  //return {hand,remainingSuits,remainingValues};

}
//drawCards(deck,4);
console.log(drawCards(deck, 12));


// Given an array of users
// Write a function that will remove any duplicates from the users array and show the number of total duplicates
// The duplicated user should be reduced to one insntace in the array
// i.e.
// userIn = [
//   {
//     name: 'Smith, John',
//     eyeColor: 'blue',
//     hairColor: 'red'
//   },
//   {
//     name: 'Smith, John',
//     eyeColor: 'blue',
//     hairColor: 'red'
//   }
// ]
// returnArray = {
//   returnUsers: {
//     name: 'Smith, John',
//     eyeColor: 'blue',
//     hairColor: 'red'
//   },
//   dupeCount: 1
// }

function deduplicateUsers(users){
  const map = new Map();
  const returnUsers = [];
  let totalDups =0;
  for (const user of users){
    //console.log(x)
    const key = `${user.name} ${user.eyeColor} ${user.hairColor}`
    
    
    if (!map.has(key)) {
      returnUsers.push(user);
      //var dup_count=0
     //map.set(key,{ user: user, dupeCount: 0 }); // I misunderstood if you wanted to track duplicates for each instance
     //or just total overall 
    map.set(key,user);
    }
  else {

    //remove the duplicate from the array
    totalDups+=1;
    //const value = map.get(key); //individual duplicate tracking for each user
    //value.dupeCount+=1; 
    //map.set(key,value);
  }


  }
  //console.log(map)

  //var key = `${users[0].name} ${users[0].eyeColor} ${users[0].hairColor}`
//console.log(key)
  //console.log(users[0])
  const returnArray = {returnUsers,totalDups}

  return returnArray;//, totalDups;
}

//console.log(deduplicateUsers(users));

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// --------NON CODING CHALLENGE--------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------


//Given a system that will allow users to create events that will be stored in a database
//And given that the database only allows searching by a single field
//And given that not all fields need to be viewable by a user
//How would you design a record object to allow you to search for events by multiple fields
//Given that you can control the object schema
//And given that all user editable fields are limited to numbers and letters
//NOTE: This question does not have a correct answer, it is a design question to see how you think about the problem