class Person{
  constructor(name, age, gender, occupation){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.occupation = occupation;
  }
  setName(n){
    this.name = n;
  }
  getName(){
    return this.name;
  }
  setAge(a){
    this.age = a;
  }
  getAge(){
    return this.age;
  }
  setGender(g){
    this.gender = g;
  }
  getGender(){
    return this.gender;
  }
  setOccupation(o){
    this.occupation = o;
  }
  getOccupation(){
    return this.occupation;
  }
  greet(){
    return `Hello, My name is ${this.name}, and I am ${this.age} years old`;
  }
  tellOccupation(){
    return `I am a ${this.occupation}`;
  }
  changeOccupation(o){
    var oldOcc = this.occupation;
    this.occupation = o;
    return `I changed my occupation from ${oldOcc} to ${this.occupation}`;
  }
}