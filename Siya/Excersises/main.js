var print = function (input) {
    const elemMyDiv = document.getElementById("my-div");

    elemMyDiv.innerHTML += input === undefined ? "undefined" : input;
    elemMyDiv.innerHTML += "<BR />";
}

"use strict";

class Student {
    constructor(firstname, lastname, birthdate) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(val) {
        this._firstname = val;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(val) {
        this._lastname = val;
    }

    get birthdate() {
        return this._birthdate;
    }

    set birthdate(val) {
        this._birthdate = val;
    }

    static MakeTableElement(students, headerColor = "gray", hasRowNum = true) {
        const elem = document.getElementById("div-std");

        const table = document.createElement("table");
        
        const headerRow = document.createElement("tr");
        const headerFirstname = document.createElement("th");
        const headerLastname = document.createElement("th");
        const headerBirthdate = document.createElement("th");

        if (headerColor !== undefined && headerColor !== null)
            headerRow.style.backgroundColor = headerColor;

        if (hasRowNum) {
            const headerRowNum = document.createElement("th");

            headerRowNum.innerHTML = "#";
            headerRow.appendChild(headerRowNum);
        }

        headerFirstname.innerHTML = "First Name";
        headerRow.appendChild(headerFirstname);

        headerLastname.innerHTML = "Last Name";
        headerRow.appendChild(headerLastname);

        headerBirthdate.innerHTML = "Birthdate";
        headerRow.appendChild(headerBirthdate);

        table.appendChild(headerRow);

        elem.appendChild(table);

        let currIndex = 0;
        for (const std in students) {
            const objStd = students[std];
            const dataRow = document.createElement("tr");

            if (hasRowNum) {
                const dataRowNum = document.createElement("td");
                dataRowNum.innerHTML = ++currIndex;
                dataRow.appendChild(dataRowNum);
            }

            const dataFirstname = document.createElement("td");
            const dataLastname = document.createElement("td");
            const dataBirthdate = document.createElement("td");

            dataFirstname.innerHTML = objStd.firstname;
            dataLastname.innerHTML = objStd.lastname;
            dataBirthdate.innerHTML = objStd.birthdate;

            dataRow.appendChild(dataFirstname);
            dataRow.appendChild(dataLastname);
            dataRow.appendChild(dataBirthdate);

            table.appendChild(dataRow);
        }

        elem.appendChild(table);
    }
}

const std = [
    new Student("Ali", "Kazemi", "1989/01/01"),
    new Student("Hassan", "Zakani", "1988/04/26"),
    new Student("Akram", "Ebrahimi", "1980/06/17"),
    new Student("Setare", "Jahani", "2001/04/12"),
    new Student("Mohsen", "Musakhani", "1955/02/28")
];

Student.MakeTableElement(std, "lightgray", true);
