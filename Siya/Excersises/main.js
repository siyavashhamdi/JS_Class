var print = function (input) {
    const elemMyDiv = document.getElementById("my-div");

    elemMyDiv.innerHTML += input === undefined ? "undefined" : input;
    elemMyDiv.innerHTML += "<BR />";
}

print('Test')
