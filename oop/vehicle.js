class vehicle{
	constructor(plateNum, colour){
	this.plateNum = plateNum;
	this.colour = colour
	}
      vehicleColor(){
      	return this.colour
      }
}
class bus extends vehicle{
	constructor(plateNum, color, seatNum){
		super(plateNum,color);
		this.seatNum = seatNum
	}
		vehicleColor(){
		    console.log("the color of the bus is blue");
        }
    }

class trailer extends vehicle{
	constructor(plateNum, color, numOfWheels){
		super(plateNum, color)
		this.numOfWheels = numOfWheels;
	}
	
}