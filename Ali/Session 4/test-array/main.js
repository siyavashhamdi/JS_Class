
function print(value) {
  document.getElementById('console').innerHTML += `${value === undefined ? 'undefined' : value}\n`
}

function clear() {
  document.getElementById('console').innerHTML = ``
}

print('reverse:');
const arrReverse = [1, 2, 3, 4, 'abc'];
print(JSON.stringify(arrReverse));
print(JSON.stringify(arrReverse.reverse()));
print(JSON.stringify(arrReverse));

print('shift:');
const arrShift = [1, 2, 3, 4, 'abc'];
print(JSON.stringify(arrShift));
print(JSON.stringify(arrShift.shift()));
print(JSON.stringify(arrShift));

print('unshift:');
const arrUnshift = [1, 2, 3, 4, 'abc'];
print(JSON.stringify(arrUnshift));
print(JSON.stringify(arrUnshift.unshift('xyz')));
print(JSON.stringify(arrUnshift));

print('slice:');
const arrSlice = [1, 2, 3, 4, 'abc'];
print(JSON.stringify(arrSlice));
print('copy:');
print(JSON.stringify(arrSlice.slice()));
print('start:');
print(JSON.stringify(arrSlice.slice(2)));
print('start negative:');
print(JSON.stringify(arrSlice.slice(-2)));
print('single value:');
print(JSON.stringify(arrSlice.slice(2, 3)));
print('range:');
print(JSON.stringify(arrSlice.slice(2, 4)));
print('range with negative end:');
print(JSON.stringify(arrSlice.slice(1, -1)));
print(JSON.stringify(arrSlice));

print('sort:');
const arrSort = [20, 10, 200, 3, 4, 'abc'];
print(JSON.stringify(arrSort));
print('asc:');
print(JSON.stringify(arrSort.sort((a, b) => b - a)));
print('desc:');
print(JSON.stringify(arrSort.sort((a, b) => a - b)));
print(JSON.stringify(arrSort));

print('splice:');
const arrSplice = [1, 2, 3, 4, 'abc'];
print(JSON.stringify(arrSplice));
print(JSON.stringify(arrSplice.splice(1, 3)));
print(JSON.stringify(arrSplice));

print('entries:');
const arrEntries = [1, 2, 3, 4, 'abc'];
print(JSON.stringify(arrEntries));
print(JSON.stringify([...arrEntries.entries()]));
