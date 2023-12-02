//some method  it is use for find available or not in some variable containg argument .or value.
const numbers=[1,3,5,7,9,11,13] 
const ans = numbers.some((number)=>number%2===0);
console.log(ans);

//for even check .

const number1=[2,4,6,8,10,12] 
const ans2 = number1.some((number)=>number%2===1);
console.log(ans2);

//check product
const userCart = [{productid:1 , productname:"mobile", price:12000},
        {productid:2, productname:"laptop",price:23000},
        {productid:3,productname:"cycle",price:24000}]


const ans3=userCart.some((price)=>price <1200);
console.log(ans3)
