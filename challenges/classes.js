// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(Attrs){
    this.newLength = Attrs.length;
    this.newWidth = Attrs.width;
    this.newHeight = Attrs.height
    }
    volume (){
        return this.newLength * this.newWidth * this.newHeight;
    }

    surfaceArea (){
        return 2 * (this.newLength * this.newWidth + this.newLength * this.newHeight + this.newWidth * this.newHeight);
    }
};
  
const cuboid = new CuboidMaker({length:4 ,width:5 ,height:5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(Attrs){
        super(Attrs)
    }
    volumeForCube (){
        return Math.pow(this.newLength, 3);
    }

    surfaceAreaForCube (){
        return 6 * Math.pow(this.newLength, 2);
    }
};

const cube = new CubeMaker({length:4 ,width:4 ,height:5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube.volumeForCube()); 
console.log(cube.surfaceAreaForCube()); /