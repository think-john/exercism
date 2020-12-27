export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  
  isTriangle() {
    return ( 
        // all three sides can't be zero
        this.side1 + this.side2 + this.side3 > 0 
      ) && (
        // the sum of any two sides must be >= than the remaining side
        this.side1 + this.side2 >= this.side3 &&
        this.side2 + this.side3 >= this.side1 &&
        this.side1 + this.side3 >= this.side2
    )
  }

  get isEquilateral() {
    return ( this.isTriangle() ) && (
      new Set([this.side1, this.side2, this.side3]).size === 1 // all sides are equal
    );
  }

  get isIsosceles() {
    return ( this.isTriangle() ) && (
      new Set([this.side1, this.side2, this.side3]).size < 3 // at least two sides are equal
    )
  }

  get isScalene() {
    return ( this.isTriangle() ) && (
      new Set([this.side1, this.side2, this.side3]).size === 3 // no sides are equal
    );
  }


}
