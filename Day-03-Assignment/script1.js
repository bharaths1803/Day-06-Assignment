var obj1 = {name : "Person 1", age : 5};
var obj2 = {age : 5, name : "Person 1"};

const sortObject = object => {
  return Object.keys(object).sort().reduce((acc, key) => {
      acc[key] = object[key];
      return acc;
  }, {});
};

const res1 = sortObject(obj1);
const res2 = sortObject(obj2);



if(JSON.stringify(res1) === JSON.stringify(res2)){
  console.log("Both objects are same")
}
else{
  console.log("Both objects are different");
}