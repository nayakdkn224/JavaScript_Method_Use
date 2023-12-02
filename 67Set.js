 //Sets (it is iterable)
//store data
//sets also have its own methods
//no index-based access
//order is not guaranteed
//unique items only (no duplicates allowed)
const items=['item1','item2','item3','item4']
const numbers=new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(items);
if(numbers.has(2))
{
    console.log("given number is present");
} 
else
{
console.log("the number is not present")
}

console.log(numbers)
