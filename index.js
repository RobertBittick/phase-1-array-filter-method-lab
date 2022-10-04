const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function findMatching(drivers,value){
    let result = drivers.filter(driverName => driverName.toLowerCase() === value.toLowerCase())
    return result
}

beforeEach(function () {
  drivers.length = 0;

  drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
});

function fuzzyMatch(drivers,value){
  let result = drivers.filter(driverLetters => driverLetters[0,1] === value[0,1])
  return result
}

beforeEach(function () {
  drivers.length = 0;

  drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
});

function matchName(drivers,value){
  let result = drivers.filter(driversMatch => driversMatch.name === value)
  return result
}
