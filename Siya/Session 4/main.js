var print = function (input) {
    const elemMyDiv = document.getElementById("my-div");

    elemMyDiv.innerHTML += input === undefined ? "undefined" : input;
    elemMyDiv.innerHTML += "<BR />";
}



// Array

print('spread array:')

const arr1 = [1, 2, 3]
const arr2 = ['x', 'y', 'z']
const obj1 = { a: 1, b: 2, c: 3 };

print(JSON.stringify(['a', ...arr1, 'b', 'c', ...arr2]))

// cloning
print('spread to clone:')
print(JSON.stringify([...arr1]))
print(JSON.stringify({ ...obj1 }))
