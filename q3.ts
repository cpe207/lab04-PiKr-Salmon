// 660612152 ปิยวัฒน์ เครือประเสริฐ
function primeNumber(a : number) {
  /* Your code here */
  let found : number = 1;
  if(a <= 1){
    return "No";
  }

  let b : number[] = [2,3,5,7];
  for(let i = 0; i < b.length ; i++){
    if (a % b[i] == 0 && a/b[i] != 1 && a/b[i] > 1){
      found = 0;
      break;
    }
  }

  if(found == 1){
    return "Yes";
  }
  else{
    return "No";
  }
}

const d1 : number = 10;
const d2 : number = 29;
const d3 : number = 2;
;

console.log(primeNumber(d1));
console.log(primeNumber(d2)); 
console.log(primeNumber(d3));

module.exports = primeNumber;
