
// 1) Creating RESUME in JSON format

var resume = {
  "Name": "Bharath S",
  "Degree": "BTECH CSBS",
  "Programming languages":["Java", "C++", "Python","SQL","C"],
  "Skills" : ["Problem solving", "Brave", "Leadership"],
  "Areas of interest":["DSA", "OOPS", "DBMS"],
  "Projects":["Gaming autism", "Hotel billing", "Autism prediction"]
}

// 2) Iterate through for loop

var keyss = Object.keys(resume);
for(var i = 0; i < keyss.length; i++){
  console.log(keyss[i], resume[keyss[i]]);
}

// Iterate through for in loop

for(var k in resume){
  console.log(k, resume[k]);
}

// Iterate through for each loop

keyss.forEach((k) => console.log(k, resume[k]));

// Iterate through for of loop
for(var k of keyss){
  console.log(k, resume[k]);
}
 
