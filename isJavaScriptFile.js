function isJavaScriptFile(fileName){
  if(typeof fileName != 'string'|| fileName.length == 0){
    return"provide valid input"
}

  if(fileName.endsWith ('.js')){
   
    return true;
  }
  else{
    return false;
  }

  
  // console.log(fileName)
}
 let result = isJavaScriptFile("");
 console.log(result);



// {


// //  lastIndex = length -1------>s 
// //  length -2----->J
// //  length -3----->.

// // if(str[str.length-1]=='s'){
// //   if(str[str.length-2]=='j'){
// //     if(str[str.length-3]=='.'){
// //       return true;
// //     }
// //   }
// // }
// // return false;
// }



function isJavaScriptFile(fileName){

  if(fileName.endsWith ('.js')){
   
  //   return true;
  // }
  // else{
  //   return false;
  }
  return fileName.endsWith('.js');
}
// let result = isJavaScriptFile("index.js");
// console.log(result);