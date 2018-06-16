
function print(value) {
  document.getElementById('console').innerHTML += `${value === undefined ? 'undefined' : value}\n`
}

function clear() {
  document.getElementById('console').innerHTML = ``
}

// Destructuring + rest

// Objects

const a = { b: 1, c: 2, d: 3, e: { f: { g: 'foo' } }, x: 'x1', y: 'y1', z: 'z1' };

function otherFunction({ x, y, z }) {
  //print(JSON.stringify(point))
  print(`x: ${x}`)
  print(`y: ${y}`)
  print(`z: ${z}`)
}

function foo(stuff) {
  const { b, c, d, e, e: { f: { g: foo = 'asd' } = {} }, w = 'default value', ...myPoint } = stuff;

  print(w)
  print(b)
  print(c)
  print(d)
  print(JSON.stringify(e))
  print(foo)

  print(JSON.stringify(myPoint))

  otherFunction(myPoint)
}

foo(a);

// Arrays

clear()

const arr = [{ x: 'x' }, 2, undefined, 4, 5, 6, 7];

function bar(stuff) {
  const [{ x }, , a = 'asd' + '123', b, c, ...rest] = stuff;

  print(x)
  print(a)
  print(b)
  print(c)
  print(JSON.stringify(rest))
}

bar(arr);


// spread

clear()

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { e: 2, f: 3, c: 1 };

// Object.assign // mutates!

const obj3 = { g: 5 };

print('assign:')
print(JSON.stringify(obj3))
print(JSON.stringify(Object.assign(obj3, obj1, obj2)))
print(JSON.stringify(obj3))

const obj4 = { g: 5 };

print('assign+close:')
print(JSON.stringify(obj4))
print(JSON.stringify(Object.assign({}, obj4, obj1, obj2)))
print(JSON.stringify(obj4))


print('spread:')
print(JSON.stringify({ ...obj1, g: 50, ...obj3, ...obj2, f: 30 }))

// Array

print('spread array:')

const arr1 = [1, 2, 3]
const arr2 = ['x', 'y', 'z']

print(JSON.stringify(['a', ...arr1, 'b', 'c', ...arr2]))

// cloning
print('spread to clone:')
print(JSON.stringify([...arr1]))
print(JSON.stringify({ ...obj1 }))

