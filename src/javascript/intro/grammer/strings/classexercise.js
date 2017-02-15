const fullName = 'Jeff William Fredericks';

const nameToArray = (fullName) => {
  const nameArray = fullName.split(' ');
  const nameObject = {
    firstName: nameArray[0],
    middleName: nameArray[1],
    lastName: nameArray[2]
  };
  return nameObject;
} ;


console.log(nameToArray(fullName));
