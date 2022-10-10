// alert('hi');
// document.write('Today, we are learning js');//testing purpose
console.log('Hi, this is alina');//debugging purpose

// Variables

//idea ways
var _firstName = 'alina';//declaration and initialization

var $lastName;//declaration 
console.log($lastName);//undefined 
$lastName = 'joe';//initialization

// declare multiple variable in single statement
var person = 'alex', age = 30, designation = 'developer';

//wrong
// var var = 20;

// Datatypes
// String

// function StringConstructor {
//     length: 
//     indexOf: function(a, b) {

//     }
// }

var first = 'alex';
var last = "harry";

console.log(first.length);//length of the string

// index/position starts from 0
var str = ' front-end development: html, css, js are the basic technologies of front-end   ';
console.log(str.length);

//search in string
console.log(str.indexOf('end', 13));//return the index/position of first occurence of the specified word
// optional: second parameter

console.log(str.lastIndexOf('end'));
console.log(str.indexOf('hello'));//-1
console.log(str.search('end'));

//extraction of strings
console.log(str.slice(2, 7));//return the string from 2nd index till 6th index
console.log(str.slice(7));//return the string from 7th index till the end
console.log(str.trim());
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('end', 'END'));
console.log(str.replaceAll('end', 'END'));

//verification for datatype
console.log(typeof (str));

// Number
var num = 20;
var numTwo = 20.87;

console.log(typeof (num));

//number to string
console.log(num.toString());//'20'
console.log(num.toFixed(2));//'20.00'

//convert string to number
console.log(Number('8989'));//8989
console.log(Number('uirif'));//NaN (illegal number)
console.log(Number(''));//0
console.log(parseInt('89.67'));//89
console.log(parseFloat('89'));//89


// Boolean
console.log(20 > 9);//true
console.log(20 < 8);//false


//undefined (absent value)
var x;
console.log(x);//undefined
console.log(typeof (x));//undefined

// x = 20;

//null (no-value or empty value)
var y = null;
console.log(y);//null
console.log(typeof (null));//object

console.log(x == y);
console.log(x === y);


// Objects - 4 ways to create a object
// 1. Object Literal
//key/value pair
//property/value pair
var person = {
    firstName: 'alex',
    age: 35,
    salary: 90000
}

// to access the value of object
console.log(person['age']);
console.log(person.firstName);
console.log(person.age);

var car = {
    model: 'val',
    color: 'red',
    numberPlate: 9000,
    brand: 'renault',
    capacity: 990,
    diesel: true,
    specialFeature: {
        autoDriving: true
    },
    me: function () {

    }
}

// 2 way
var obj = Object.create(car);//creating a new object
console.log(obj.model);
console.log(obj.specialFeature);

console.log(typeof (obj));
console.log(typeof (car));

// 3 way new keyword (Prototype- ES5)
// var objVal = new Student();

// 4 way new keyword (Class - ES6)
// var objVal = new University();

//
console.log(Object.keys(car));

//
console.log(Object.values(car));

//updation
car.model = 'abc';
console.log(car);


//Arrays
//index/position
var num = [90, 89, 67, 56];//array of number
var color = ['pink', 'red', 'orange', 'blue'];//array of strings
var mix = [90, 'color', null, true, false, [989, 8990]];

console.log(num.length);

console.log(typeof (num));

console.log(mix);
console.log(color[1]);
console.log(color[2]);

// verfication of array
console.log(Array.isArray(num));

// convert array to string
console.log(color.join('*'));

// pop & push
color.pop();//deletes last element from an array
console.log(color);

color.push('white');// add element in the end of an array
console.log(color);

// shift & unshift
color.shift();//deletes start element from an array
console.log(color);

color.unshift('black');// add element in the begining of an array
console.log(color);

//splice : add & delete element in the between of an array
color.splice(1, 2, 'blue', 'yellow');//start of index, num of elements to be deleted, value you want to add 
console.log(color);

color.splice(3, 0, 'pink');
console.log(color);

color.splice(2, 1);
console.log(color);

//concat
var newArr = mix.concat(num, color);
console.log(newArr);

//array of objects (IMP)
//employee data

var employeeData = [{
    name: 'alex',
    age: 20,
    salary: 900890
}, {
    name: 'harry',
    age: 22,
    salary: 907267
}, {
    name: 'alina',
    age: 25,
    salary: 9090
}];

console.log(employeeData[0].name);

// console.log(t);//give error as it is not defined


// Operators
// Arithmetic Operator
var numOne = 20;
var numTwo = 30;

var add = numOne + numTwo;//addition
var sub = numTwo - numOne;//subtraction
var mult = numOne * numTwo;//multiply
var divi = numTwo / numOne;//division (quotient)
var rem = numTwo % numOne;//modulus (remainder)

console.log(add, sub, mult, divi, rem);

//increment & decrement
add++;//add = add + 1
sub--;//sub = sub - 1

console.log(add, sub);

// console.log(Math.round(divi));

// Operator Precendance
// ()
// * /
// + - 
// L -> R


//priority of operator
// 10 + 89 - (90 + 67) - 89;


// Assignment Operator (=)
var val = 20;//


//String Operator (+)
var strOne = 'hello';
var strTwo = 'world';
console.log(strOne + ' ' + strTwo);

// Implicit coersion (automatic type conversion)
console.log(strOne + 20);//
console.log(20 + 20 + strOne);
console.log(20 + strOne + 20);
console.log(strOne + 20 + 20);
console.log('20' + 20);//
console.log('20' - 20);//
console.log('vfjrfj' - 20);//NaN
console.log((strOne + strTwo) / 20);
console.log(('20' + '10') / 3);
console.log(20 + 90 * ('20' - 20));
console.log('' + 20);//0 + 20

//Rules
//operator precendence
//datatype of operands
//non-numeric or numeric
//result

// numeric string
// '8090'

// alpha string
// 'hfhekf'

// non-numeric
// 'hjucf' or '+_)(())'



