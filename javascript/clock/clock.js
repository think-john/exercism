export class Clock {
  constructor(hour, minutes = 0) {    
    this.clockTime = new Date()
    this.clockTime.setHours(hour, minutes)
  }

  plus  = ( minutesToAdd ) => new Clock(this.clockTime.getHours(), this.clockTime.getMinutes() + minutesToAdd);
  
  minus = ( minutesToSubtract ) => new Clock(this.clockTime.getHours(), this.clockTime.getMinutes() - minutesToSubtract);
  
  equals = ( Clock ) => this.toString() === Clock.toString();

  toString = () => this.clockTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}
