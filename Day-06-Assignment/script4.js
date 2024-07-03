class Uber{
  constructor(baseFare, timeRate, distanceRate, bookingFee, time, Distance, waitTime){
    this.baseFare = baseFare;
    this.timeRate = timeRate;
    this.distanceRate = distanceRate;
    this.bookingFee = bookingFee;
    this.time = time;
    this.Distance = Distance;
    this.waitTime = waitTime;
  }
  calcPrice(){
    var price = this.baseFare + this.distanceRate * this.Distance + this.timeRate * this.time + this.bookingFee;
    var waitTimePrice = 100;
    if(this.waitTime >= 1){
      price = price + this.waitTimePrice * this.waitTime;
    }
  }
}