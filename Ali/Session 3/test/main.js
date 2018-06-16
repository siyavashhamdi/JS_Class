
function print(value) {
  document.getElementById('console').innerHTML += `${value === undefined ? 'undefined' : value}\n`
}

function clear() {
  document.getElementById('console').innerHTML = ``
}


// Objects

const prop = 'z1';
const obj1 = {
  a: 1,
  b: '2',
  c: {
    d: ['f']
  },
  // Computed properties:
  [prop + 'aa']: 1,

  foo() {

  },

  foo2: function () {

  },

  foo3: () => { },

  // Getters / Setters

  _bar: 'bar',

  get bar() {
    return this._bar;
  },

  set bar(value) {
    if (typeof value !== 'string') {
      throw new Error('invalid input type');
    }

    this._bar = value
  },

  firstName: 'a',
  lastName: 'b',


  // getFullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // },

  get fullname() {
    return `${this.firstName} ${this.lastName}`;
  }
}



print(obj1.bar);
obj1.bar = '1';
print(obj1.bar);
print(obj1.fullname);
obj1.firstName = 'aaa';
print(obj1.fullname);

// obj1.newProp = 123;

Object.defineProperty(obj1, 'newProp', {
  writable: false,
  configurable: false,
  enumerable: true,
  value: '123',
})

Object.defineProperty(obj1, 'newPropDrived', {
  enumerable: true,
  get() {
    return obj1._newPropDrived + ' 123';
  },
  set(value) {
    obj1._newPropDrived = `abc ${value}`;
  },
})

obj1.newPropDrived = `zyx`;

// print(JSON.stringify(obj1, null, '  '));

print(JSON.stringify(Object.keys(obj1)));
print(JSON.stringify(Object.values(obj1)));
print(JSON.stringify(Object.entries(obj1)));


for (const [key, value] of Object.entries(obj1)) {
  if (typeof value !== 'function') {
    print(`${key}: ${value}`);
  }
}

// typeof [] === 'object' // true! x
// Array.isArray([]) // true

const arr = [1, 2, 3, 4, {}, false, true];

print(JSON.stringify(arr))

print(arr.length);

// arr[1234] = false;
// print(arr.length);

print('concat:');
print(JSON.stringify(arr));
print(JSON.stringify(arr.concat([4, 5, 6])));
print(JSON.stringify(arr));

print('every:');
print(JSON.stringify(arr));
print(JSON.stringify(arr.every(element => typeof element === 'number')));
print(JSON.stringify(arr));


print('some:');
print(JSON.stringify(arr));
print(JSON.stringify(arr.some(element => typeof element === 'number')));
print(JSON.stringify(arr));


print('filter:');
print(JSON.stringify(arr));
print(JSON.stringify(arr.filter(element => typeof element === 'number')));
print(JSON.stringify(arr));


print('find:');
print(JSON.stringify(arr));
print(JSON.stringify(arr.find(element => typeof element === 'number' && element % 3 === 0)));
print(JSON.stringify(arr.find(element => typeof element === 'number' && element % 12 === 0)));
print(JSON.stringify(arr));


print('findIndex:');
print(JSON.stringify(arr));
print(JSON.stringify(arr.findIndex(element => typeof element === 'number' && element % 3 === 0)));
print(JSON.stringify(arr));

clear();

const arr2 = [1, 2, 3, 4, 'abc'];

print('includes:');
print(JSON.stringify(arr2));
print(JSON.stringify(arr2.includes('abc')));
print(JSON.stringify(arr2));

print('indexOf:');
print(JSON.stringify(arr2));
print(JSON.stringify(arr2.indexOf('abc')));
print(JSON.stringify(arr2));

print('join:');
print(JSON.stringify(arr2));
print(JSON.stringify(arr2.join(', ')));
print(JSON.stringify(arr2));

print('length:');
print(JSON.stringify(arr2));
print(JSON.stringify(arr2.length));
print(JSON.stringify(arr2));

clear();

function mapper(item) {
  return `Entry: ${item}`;
}

print('map:');
print(JSON.stringify(arr2));
print(JSON.stringify(arr2.map(mapper)));
print(JSON.stringify(arr2));

print('pop:');
const arrPop = [1, 2, 3, 4, 'abc'];
print(JSON.stringify(arrPop));
print(JSON.stringify(arrPop.pop()));
print(JSON.stringify(arrPop));

print('push:');
const arrPush = [1, 2, 3, 4, 'abc'];
print(JSON.stringify(arrPush));
print(JSON.stringify(arrPush.push('xyz')));
print(JSON.stringify(arrPush));

print('reduce:');
const arrReduce = [1, 2, 3, 4, 10];
print(JSON.stringify(arrReduce));


print(`sum: ` + JSON.stringify(arrReduce.reduce((previous, current) => previous + current)));
print(`avg: ` + JSON.stringify(arrReduce.reduce((previous, current) => previous + current) / arrReduce.length));


// print('trace:');
// print(`sum: ` + JSON.stringify(arrReduce.reduce((previous, current) => {
//   print(`previous: ${previous}`)
//   print(`current: ${current}`)
//   return previous + current;
// }, 0)));

// print('trace with initial value:');
// print(`sum: ` + JSON.stringify(arrReduce.reduce((previous, current) => {
//   print(`previous: ${previous}`)
//   print(`current: ${current}`)
//   return previous + current;
// })));

print(`pivot: ` + JSON.stringify(arrReduce.reduce((map, current, index) => {
  map[current] = index;
  return map;
}, {})));

print(JSON.stringify(arrReduce));
