// module6_homework-1
let arr = [1, 2, 3, 4, 5, 2, "dsfd"];
function count(arr) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 === 0 && typeof arr[i] == "number") {
       count1++;
     }else if(typeof arr[i] !== "number")
      res = "Not a Number"
    else{
       count2++;

     }
  }
   console.log(count1);
  console.log(count2);
  console.log(res)
}
count(arr);

// module6_homework-2

function primeNumb(num) {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  } else {
    return "Число должно быть больше 1";
  }
}
console.log(primeNumb(150));

// module6_homework-3

function sum(x) {
    return function(y) {
        return x + y;
    };
}
let f = sum(5);
console.log( sum(5)(2), sum(2)(2), sum(40)(2) );
// module6_homework-4
const intervalId = setInterval(function (a, b) {

   for(let i = 0; i <= b; i++){
      if(i >= a && i <= b){
        console.log(i)
      }
    }

}, 1000, 5,  15); 
// module6_homework-5

const multiplication = (a, b) =>{
  const result = Math.pow(a, b);
  console.log(result)
}
multiplication(2, 3)
