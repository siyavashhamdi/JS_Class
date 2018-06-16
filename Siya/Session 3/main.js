var print = function (input) {
    const elemMyDiv = document.getElementById("my-div");

    elemMyDiv.innerHTML += input === undefined ? "undefined" : input;
    elemMyDiv.innerHTML += "<BR />";
}

const obj = {
    _bar: "bar",

    get bar() {
        return this._bar;
    },

    set bar(value) {
        if (typeof value !== "string")
            throw new Error("Me: Invalid input type");

        this._bar = value;
    }
}

Object.defineProperty(obj, "newProp", {
    configurable: true,
    enumerable: true,
    value: "Salam"
});

obj.newProp = "Ali";

const arr = [1, 3, "Salam", {}, []];

print(`pivot: ` + JSON.stringify(arr.reduce((map, current, index) => {
    map[current] = index;
    return map;
}, {})));
