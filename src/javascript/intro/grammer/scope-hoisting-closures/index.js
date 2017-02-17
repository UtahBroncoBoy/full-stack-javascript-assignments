export const ssn = value => {

  const sanitize = () => value.replace(/\D+/g, '').toString();

  const format = (value) => `${value.substring(0, 3)}-${value.substring(3, 5)}-${value.substring(5)}`;

  const isValid = () => {
    //initialize const to hold regEx for SSN validation & test for valid value.
    const sanatizeValue = sanitize(value);
    return sanatizeValue.length === 9;
  };

  return {

    isValid,

    //Sanitize and format SSN
    toString(myString){
      const sanaString = sanitize(myString);
      return format(sanaString);
    }
  };
};



// Why does this work?
export const result = calculate(1,2);

function calculate(x, y) {
  return x + y;
}

