class Circle{
  constructor(radius, color){
    this.radius = radius;
    this.color = color;
  }
  getRadius(){
    return this.radius;
  }
  setRadius(r){
    this.radius = r;
  }
  getColor(){
    return this.color;
  }
  setColor(c){
    this.color = c;
  }
  getArea(){
    return Math.PI * this.radius * this.radius;
  }
  getCircumference(){
    return 2 * Math.PI * this.radius;
  }
  toString(){
    return `Circle[radius = ${this.radius}, color = ${this.color}]`;
  }
}

var c1 = new Circle(1.0, "Red");

