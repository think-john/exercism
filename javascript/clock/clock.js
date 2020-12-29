export const at = (hour = 0, minute = 0) => {

  let clockTime = new Date()
  clockTime.setHours(hour, minute)

  let h = clockTime.getHours().toString();
  let m = clockTime.getMinutes().toString();

  return {
    h: () => h,
    m: () => m,
    toString: () => `${h.padStart(2,'0')}:${m.padStart(2,'0')}`,
    equals: (clock) => ((h == clock.h()) && (m == clock.m())),
    minus: minutes => at(h,+m - +minutes),
    plus: minutes => at(h,+m + +minutes),
  }
}