//substruction arrow //Single Perametter
const difference = (a, b) => a - b;
const multiply = (first , second, third)=> first * second * third;


const getAge = (person)=>person.age;
const student = {name: 'Shamim' , age : 20};
const age = getAge(student);
console .log(age);


const getThird= numbers =>numbers[2];
const numbers = [1,2,3,4,5,6,7,8,9,10];
const third = getThird(numbers);
console.log(third);

const doubleIt = number => number * 2;
const result = doubleIt(5);
console.log(result);

//no perametter
const getPI = () => Math.PI;
console.log(getPI());

//large arrow function
const doMath = (a,b,c) =>{
    const sum = a + b + c;
    const multiply = a*b*c;
    const result = sum + multiply;
    return result;
}
const results = doMath(1,5,7);
console.log(results);
