// 1rad × 180/π = 57.296°
// 10rad *180/pi
// 55rad *180/pi


function radianToDegree(radian){

    if(typeof radian != 'number'){
        return"provide valid input"
    }
    const PI = 3.14159265359; 

    const degree = (radian *(180/PI)).toFixed(2);
    console.log(degree);
    return degree;
}
 let result = radianToDegree(12);
 console.log(result);