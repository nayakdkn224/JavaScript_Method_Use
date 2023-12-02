const users=[{userId: 1 , firstName:"a",age:22},
{userId: 2 ,firstName:"b",age:27},
{userId: 3 ,firstName:"c",age:29},
{userId: 4 ,firstName:"d",age:89}];

const myUser = users.find((user)=>user.userId===2);
console.log(myUser)


//string using for find but not working bocz same length string is contain 

const myArray =["helloo","ram","sayam","deepak","madh"]
function isLength3(string){
    return string.length === 3 ;
}
const ans = myArray.find((string)=> string.length===4);
console.log(ans);