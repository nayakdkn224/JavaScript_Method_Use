const myArray=[1,2,3,4,5,6,7,8,9,2,5,6,8,5,];
const newuniqueArray = new Set(myArray);
console.log(newuniqueArray);
let length=0;
for(let element of newuniqueArray)
{
  console.log(element)
  length++;
}
console.log("the number element is :",length)