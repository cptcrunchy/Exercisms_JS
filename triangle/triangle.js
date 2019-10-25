export default class Triangle {
    constructor(...sides) {
        this.sides = sides.sort( (a,b) => a - b);
        this.uniqueValues = new Set(this.sides);
    }

    kind() {

        if(!this.isValidTriangle()) throw new Error('Invalid triangle!')
            let triangleType = "scalene";

        if(this.uniqueValues.size === 1) triangleType = "equilateral";
        if(this.uniqueValues.size === 2) triangleType = "isosceles";
        
        return triangleType;
        
    }
    isValidTriangle() {
        const [sideA, sideB, sideC] = this.sides;
        return sideA > 0 && sideA + sideB >= sideC;
    }
}
