//Using Arrow Functions

//Printing odd numbers
var res1 = (arr) =>{
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1){
      console.log(arr[i]);
    }
  }
}
// 5 7

//Capitalize first letter of all strings
var res2 = (arr) =>{
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    console.log(arr[i]);
    }
}
// Hello This Is Me

//Sum of all numbers in an array
var res3 = (arr) =>{
  var summi = 0;
  for(var i = 0; i < arr.length; i++){
    summi += arr[i];
  }
  return summi;
}
// 32

//Return all prime numbers in an array
var isPrime = (num) =>{
  if(num <= 2) return true;
  for(var i = 2; i * i <= num; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}
var primes = (arr) =>{
  for(var i = 0; i < arr.length; i++){
    if(isPrime(arr[i])){
      console.log(arr[i]);
    }
  }
}
// 2 5 7

//Return all palindrome numbers in an array
var isPalindrome = (num) =>{
  var rev = 0;
  var t = num;
  while(t != 0){
    var r = t%10;
    rev = rev * 10 + r;
    t = Math.floor(t / 10);
  }
  return (num == rev);
}
var palindromes = (arr) =>{
  for(var i = 0; i < arr.length; i++){
    if(isPalindrome(arr[i])){
      console.log(arr[i]);
    }
  }
}
// 121 212 33

a = [2,5,7,8,10];
res1(a);

b = ["hello", "this", "is", "me"];
res2(b);
console.log(res3(a));
primes(a);

c = [121,212,33,45,67];
palindromes(c);