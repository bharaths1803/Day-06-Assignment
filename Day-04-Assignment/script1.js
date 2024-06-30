//Using Anonymous Functions

//Printing odd numbers
var res1 = function(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1){
      console.log(arr[i]);
    }
  }
}
// 5 7

//Capitalize first letter of all strings
var res2 = function(arr){
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    console.log(arr[i]);
    }
}
// Hello This Is Me

//Sum of all numbers in an array
var res3 = function(arr){
  var summi = 0;
  for(var i = 0; i < arr.length; i++){
    summi += arr[i];
  }
  return summi;
}
// 32

//Return all prime numbers in an array
var isPrime = function(num){
  if(num <= 2) return true;
  for(var i = 2; i * i <= num; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}
var primes = function(arr){
  for(var i = 0; i < arr.length; i++){
    if(isPrime(arr[i])){
      console.log(arr[i]);
    }
  }
}
// 2 5 7

//Return all palindrome numbers in an array
var isPalindrome = function(num) {
  var rev = 0;
  var t = num;
  while(t != 0){
    var r = t%10;
    rev = rev * 10 + r;
    t = Math.floor(t / 10);
  }
  return (num == rev);
}
var palindromes = function(arr){
  for(var i = 0; i < arr.length; i++){
    if(isPalindrome(arr[i])){
      console.log(arr[i]);
    }
  }
}
// 121 212 33

//Return median of 2 sorted arrays
var findMedian = function(arr1, arr2){
  var ele1 = -1, ele2 = -1, l = 0; r = 0, cnt = 0;
  var n = arr1.length;
  var medianIdx = n;
  while(true){
    if(arr1[l] <= arr2[r]){
      cnt++;
      if(cnt == medianIdx) ele1 = arr1[l];
      if(cnt == medianIdx + 1) ele2 = arr1[l];
      l++;
    }
    else{
      cnt++;
      if(cnt == medianIdx) ele1 = arr2[r];
      if(cnt == medianIdx + 1) ele2 = arr2[r];
      r++;
    }
    if(ele1 != -1 && ele2 != -1){
      var meidanEle = (ele1 + ele2) / 2;
      return meidanEle;
    }
  }
}
// 13.5

//Rotate an array right by k times
var rotate = function(arr, k){
  var temp = [];
  var n = arr.length;
  k = k % n;
  for(var i = n - k; i < n; i++){
    temp.push(arr[i]);
  }
  for(var i = n - 1; i >= k; i--){
    arr[i] = arr[i - k];
  }
  for(var i = 0; i < k; i++){
    arr[i] = temp[i];
  }
  for(var i = 0 ; i < n; i++){
    console.log(arr[i]);
  }
}
// 7 8 10 2 5


a = [2,5,7,8,10];
res1(a);

b = ["hello", "this", "is", "me"];
res2(b);
console.log(res3(a));
primes(a);

c = [121,212,33,45,67];
palindromes(c);

p = [12,13,16,20];
q = [2,4,14,22];
console.log(findMedian(p, q));

rotate(a, 3);

console.log("End");

// Using IIFE

//Printing odd numbers
(function(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1){
      console.log(arr[i]);
    }
  }
})(a);
// 5 7

//Capitalize first letter of all strings
(function(arr){
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    console.log(arr[i]);
    }
})(b);
// Hello This Is Me

//Sum of all numbers in an array
(function(arr){
  var summi = 0;
  for(var i = 0; i < arr.length; i++){
    summi += arr[i];
  }
  console.log(summi);
})(a);
// 32

//Return all prime numbers in an array

(function(arr){
  for(var i = 0; i < arr.length; i++){
    if(isPrime(arr[i])){
      console.log(arr[i]);
    }
  }
})(a);
// 2 5 7

//Return all palindrome numbers in an array

(function(arr){
  for(var i = 0; i < arr.length; i++){
    if(isPalindrome(arr[i])){
      console.log(arr[i]);
    }
  }
})(c);
// 121 212 33

//Return median of 2 sorted arrays
(function(arr1, arr2){
  var ele1 = -1, ele2 = -1, l = 0; r = 0, cnt = 0;
  var n = arr1.length;
  var medianIdx = n;
  while(true){
    if(arr1[l] <= arr2[r]){
      cnt++;
      if(cnt == medianIdx) ele1 = arr1[l];
      if(cnt == medianIdx + 1) ele2 = arr1[l];
      l++;
    }
    else{
      cnt++;
      if(cnt == medianIdx) ele1 = arr2[r];
      if(cnt == medianIdx + 1) ele2 = arr2[r];
      r++;
    }
    if(ele1 != -1 && ele2 != -1){
      var meidanEle = (ele1 + ele2) / 2;
      console.log(meidanEle);
      break;
    }
  }
})(p,q);
// 13.5

//Rotate an array right by k times
(function(arr, k){
  var temp = [];
  var n = arr.length;
  k = k % n;
  for(var i = n - k; i < n; i++){
    temp.push(arr[i]);
  }
  for(var i = n - 1; i >= k; i--){
    arr[i] = arr[i - k];
  }
  for(var i = 0; i < k; i++){
    arr[i] = temp[i];
  }
  for(var i = 0 ; i < n; i++){
    console.log(arr[i]);
  }
})(c, 2);
// 45 67 121 212 33

