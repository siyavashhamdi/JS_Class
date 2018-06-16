function print(myStr) {
    let elemMyDiv = document.getElementById("my-div");

    elemMyDiv.innerHTML += myStr === undefined ? "N/A" : myStr;
    elemMyDiv.innerHTML += "<BR />";
}

if (undefined)
    print("T");
else
    print("F");
    