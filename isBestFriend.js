
// {name:"abul", friend : "babul"},
// {name:"babul", friend : "abul"},
// true


// {name:"abul", friend : "kabul"},
// {name:"kabul", friend : "sabul"},
// false





function isBestFriend(obejectOne, objectTwo){
        if(obejectOne.name == objectTwo.friend && objectTwo.name== obejectOne.friend){
            return true;
        }else{
            return false;
        }
       

}
console.log(isBestFriend({name:"abul", friend : "kabul"},
 {name:"kabul", friend : "sabul"} ))