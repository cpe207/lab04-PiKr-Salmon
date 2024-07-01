// 660612152 ปิยวัฒน์ เครือประเสริฐ
function typeChecker(a :string |number  , b : string | number) {
  /* Your code here */
  if(typeof a == 'string' && typeof b == 'string'){
    return "I LOVE YOU"
  }
  if(typeof a == 'number' && typeof b == 'number'){
    return a+b;
  }
  if ( a !== b){
    return "NOT MATCHED"
  }
}

//Test cases
const a1 : string = "Jack";
const b1 : string = "Rose";
const a2 : number = 555;
const b2 : number = 100;
const a3 : string = "Jack";
const b3 : number = 100;

console.log(typeChecker(a1, b1));
console.log(typeChecker(a2, b2));
console.log(typeChecker(a3, b3));

module.exports = typeChecker;
