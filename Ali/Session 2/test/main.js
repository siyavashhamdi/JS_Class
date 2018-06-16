
window.document.title = window.document.scripts;

function print(value) {
  document.getElementById('console').innerHTML += `${value === undefined ? 'undefined' : value} <br>`
}

// function scoped
// deprecated
// var a = 1;

// block scoped
// let b = 2;
// const c = 3;

// b = 5;


function foo() {
  //var a;

  if (true) {
    //var a = 2;
    //a = 2
    let b = 2;
    print(b);
  }

  if (true) {
    // var a;
    let a;
    print(b);
  }

}

//foo()

// typeof aN === 'number'
const aN = 1;
const bN = 1.2;
const cN = -1.2;
const dN = Infinity;
const eN = NaN;
const fN = 1e8;

// typeof aS === 'string'
const aS = "123";
const bS = 'abc';

// boolean
const aB = true;
const bB = false;

// function
const aF = function (a, b) { };
const bF = (a, b) => { };

// undefined
const aU = undefined;

// object
const aO = null;
const bO = {
  a: '1',
  b: 1,
  c: function () { },
  'asdfsjdffh skjfh sjkfhfdjkg df12384723987 v~239087349056890+_&*@#(*#Q@&$': function () { },
  e: {
    f: [],
  },
  g: [1, 2, 3],
};

Array.isArray([]) // true

const cO = [
  1,
  2,
  '2',
  function () { },
  {},
  [],
];

// Functions:

// 1: Function Decleration

// Works
log();

function log(a, b, c) {

}

// 2: Function Expression

// Error!
// log2();

var log2 = function (a, b, c) {
  return a + b + c;
}

var log2x = function log2f(a, b, c) {
  return a + b + c;
}

// Error
//log2f();

// 3: Arrow Function

const log3 = (a, b, c) => {
  return a + b + c;
}

const log4 = (a, b, c) => a + b + c;


// Function features

function log5(a, b = '2', c = 1) {
  print(a)
  print(b)
  print(c)
}

// log5(23, 123)

const log6 = (a = '2', b = 2, c = 3) => a + b + c;

function log7(a, b, ...other) {
  print(a)
  print(b)
  print(other.join())
}

// log7(1, 2, 3, 4, 5, 6, 7, 8);

// Equality check

// ==

// ===

if (aN) {

} else if (aN) {

} else {

}

switch(aN) {
  case '1': // aN === '1'
  case 'b':
  case 'c':
  case 'd':
    print('a')
    break;
    default:
    //print('b')
    break;
}

