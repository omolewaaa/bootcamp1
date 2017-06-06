class vehicle{
	constructor(plateNum, yearOfProduction, color){
	this.plateNum = plateNum;
	this.yearOfProduction = yearOfProduction;
	}
	  getPlateNum(){
	    return this.plateNum
	  }

      getYearOfProduction(){
        return this.yearOfProduction
      }
      getColor(){
      	return this.color
      }
}
class bus extends vehicle{
	constructor(plateNum, yearOfProduction,color, numOfSeat){
		super(plateNum, yearOfProduction, color);
		this.numOfSeat = numOfSeat
		this.num = [];
	}
		peopleEnterBus(humanBeing){
			this.num.push(humanBeing);
		}
		
		peopleInsideBus(){
			for(humanBeing in this.num){
			console.log (humanBeing.toString());		}
	        }
        }
      getNumOfSeat(){
      	return this.numOfSeat;
      }
    }

class trailer extends vehicle{
	constructor(plateNum, yearOfProduction, color, numOfWheels){
		super(plateNum, yearOfProduction, color)
		this.numOfWheels = numOfWheels;
	}
	getBus(){
		return this.bus;
	}
}