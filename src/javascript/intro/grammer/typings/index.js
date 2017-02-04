export default {
  name: {
    first: 'Jeff',
    last: 'Fredericks'
  },
  age: 43,
  happy: true,
  stressed: false,
  numberOfMansions: null,
  catsOwned:undefined,
  ageOfKids: [18, 15, 13, 8],
  isStressed() {
    let startTime = new Date().getMilliseconds();
    if(this.stressed === true)  {
      console.log(this.name.first + ' is stressed today!');
    } else {
      console.log(this.name.first + ' is feeling at peace.');
    } 
    let endTime = new Date().getMilliseconds();
    let durationTime = endTime - startTime;
    console.log('The isStressed method took ' + durationTime + ' milliseconds to run.');
  },
  greet() {
    return this.name.first + ' says hello.';
  }
  
};