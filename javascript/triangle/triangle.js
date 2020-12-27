//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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

  isEquilateral() {
    return ( this.isTriangle() ) && (
      new Set([this.side1, this.side2, this.side3]).size === 1 // all sides are equal
    );
  }

  isIsosceles() {
    return ( this.isTriangle() ) && (
      new Set([this.side1, this.side2, this.side3]).size < 3 // at least two sides are equal
    )
  }

  isScalene() {
    return ( this.isTriangle() ) && (
      new Set([this.side1, this.side2, this.side3]).size === 3 // no sides are equal
    );
  }


}
