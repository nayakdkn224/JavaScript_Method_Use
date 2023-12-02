//splice or remove metod it is use for remove or delete the last  item 
//we can use for both create and delete 
const myArray=['item1-0','item2-1','item3-2','item4-3']
const newArray= myArray.splice(0,3);// start == delete == insert(replace)
console.log(newArray);

console.log(myArray);