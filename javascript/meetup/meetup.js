// expected input: meetup(2013, 5, 'teenth', 'Monday')

const ORDINALS = "first second third fourth fifth".split(' ');
const DAYNAMES = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(' ');

let days = {
  Sunday: [],
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: []
}

export const meetup = (desiredYear, desiredMonth, desiredDescriptor, desiredDayOfWeek) => {

  // Months are zero-indexed in Javascript: January is 0, February is 1.
  // Use month: 4 to construct a date in May.
  // https://stackoverflow.com/questions/2552483/why-does-the-month-argument-range-from-0-to-11-in-javascripts-date-constructor
  const javascriptIndexMonth = (desiredMonth - 1) 
 
  // Populate the days array with all the days from desiredMonth and desiredYear
  //console.log(`let currentDate = new Date(${desiredYear}, ${javascriptIndexMonth}, 1);`)
  let currentDate = new Date(desiredYear, javascriptIndexMonth, 1);

  do {
    var currentWeekdayNumber = currentDate.getDay();
    var currentWeekdayName = DAYNAMES[currentWeekdayNumber];
    days[currentWeekdayName].push(currentDate.getDate());
    currentDate.setDate(currentDate.getDate() + 1);
  }
  while (currentDate.getMonth() == javascriptIndexMonth);

  // Get an array of (for instance) Mondays
  // days['Monday'] in May 2013 would be [6,13,20,27]
  var candidateDates = days[desiredDayOfWeek];
  var candidateDay = ''

  // Use the descriptor to decide the day of the month
  switch (desiredDescriptor) {
    case 'teenth':
      candidateDay = candidateDates.filter(day => day > 12)[0];
      break;
    case 'last':
      candidateDay = candidateDates.pop();
      break;
    default:
      var nth = ORDINALS.indexOf(desiredDescriptor);
      candidateDay = candidateDates[nth];
  }

  return new Date(desiredYear, javascriptIndexMonth, candidateDay);
}