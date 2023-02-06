// john
// Alex


let nameOne = "john";
let nameTwo = "Alexis";

let FriendsOneLength = nameTwo.length;
let FriendsTwoLength = nameTwo.length;

if(FriendsOneLength > FriendsTwoLength){
    console.log(nameOne.split('').reverse().join(''));
}
else{
    console.log(nameTwo.split('').reverse().join(''));
}



// console.log(let FriendsOneLength = nameTwo.length;)

function reverseName(nameOne,nameTwo){
    let FriendsOneLength = nameTwo.length;
    let FriendsTwoLength = nameTwo.length;

if(FriendsOneLength > FriendsTwoLength){
  return nameOne.split('').reverse().join('');
}
else{
 return nameTwo.split('').reverse().join('');
}
}
let result = reverseName('John','Alexis');
console.log(result)

// optional way of reverse String

// length = 6;
// last index = 6-1=5
// str[5]
let str = "Alexis";

for(let i=0;i<str.length;){
    const element = str[i];
    console.log(element)
}
// s+i+X+e +l+A