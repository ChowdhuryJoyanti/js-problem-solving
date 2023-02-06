// 50
// 55
// 112
// 235
// 365

// 0 
// 1250
// 250
// 500
// 1000


// 365 --->50---1
//             365 ---(365 % 50) == 15

//             11-----1micro
//             15---- (15 % 11)==4
//             4 * 250 = 1000


function publicBusFare(partcipants){
    if(typeof partcipants !='number'|| partcipants<50){
        return "Provide valid participants"
    }
    let busSeatCapacity = 50;
    let microSeatCapacity =11;
    let remaining = 0;
    // after calculating the amount of people who can travel by our bus
    // the value of remaing willlll be
    remaining = partcipants % busSeatCapacity;
      // after calculating the amount of people who can travel by our bus
    // the value of remaing willlll be
    remaining = remaining % microSeatCapacity;
    // Now calculate the total cost of public bus
    let costOfPublicBus = remaining *250;
    return costOfPublicBus;

// }
//    console.log(publicBusFare (365));


//    crackers

// function temparatureConverter(valName){
//     let degree = valName -32/1.8
//     return parseFloat(degree.toFixed(2));
// }
}
function temparatureConverter(valName) {
    let degree = valName - 32 /1.8;
    return parseFloat(degree.toFixed(2));

}
     let result = temparatureConverter (50)
    console.log(result)


