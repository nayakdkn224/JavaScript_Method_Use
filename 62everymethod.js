const numbers =[2,4,5,6,7,8,9,10];


const ans =numbers.every((number)=>number%2===0);
console.log(ans);

//every method check the list for given condition .if it is all number match it comes the result true otherwise false
const userCart = [{productid:1 , productname:"mobile", price:12000},
        {productid:2, productname:"laptop",price:23000},
        {productid:3,productname:"cycle",price:24000}]

const ans2 = userCart.every((cartItem)=>cartItem.price < 3500);
console.log(ans2)