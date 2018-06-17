var print = function (input) {
    const elemMyDiv = document.getElementById("my-div");

    elemMyDiv.innerHTML += input === undefined ? "undefined" : input;
    elemMyDiv.innerHTML += "<BR />";
}

"use strict";

class Student {
    constructor(id, firstname, lastname, birthdate, isActive) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.isActive = isActive;
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

    get isActive() {
        return this._isActive;
    }

    set isActive(val) {
        this._isActive = val;
    }

    static MakeTableElement(students, headerColor = "gray", hasRowNum = true) {
        const elem = document.getElementById("div-std");

        const table = document.createElement("table");

        const headerRow = document.createElement("tr");

        const headerId = document.createElement("th");
        const headerFirstname = document.createElement("th");
        const headerLastname = document.createElement("th");
        const headerBirthdate = document.createElement("th");
        const headerIsActive = document.createElement("th");

        table.setAttribute("id", "std-table");

        if (headerColor !== undefined && headerColor !== null)
            headerRow.style.backgroundColor = headerColor;

        if (hasRowNum) {
            const headerRowNum = document.createElement("th");

            headerRowNum.innerHTML = "#";
            headerRow.appendChild(headerRowNum);
        }

        headerId.innerHTML = "Id";
        headerRow.appendChild(headerId);

        headerFirstname.innerHTML = "First Name";
        headerRow.appendChild(headerFirstname);

        headerLastname.innerHTML = "Last Name";
        headerRow.appendChild(headerLastname);

        headerBirthdate.innerHTML = "Birthdate";
        headerRow.appendChild(headerBirthdate);

        headerIsActive.innerHTML = "IsActive";
        headerRow.appendChild(headerIsActive);

        table.appendChild(headerRow);

        elem.appendChild(table);

        let currIndex = 0;
        for (const objStd of students) {
            const dataRow = document.createElement("tr");

            if (hasRowNum) {
                const dataRowNum = document.createElement("td");
                dataRowNum.innerHTML = ++currIndex;
                dataRow.appendChild(dataRowNum);
            }

            const dataId = document.createElement("td");
            const dataFirstname = document.createElement("td");
            const dataLastname = document.createElement("td");
            const dataBirthdate = document.createElement("td");
            const dataIsActive = document.createElement("td");

            dataId.innerHTML = objStd.id;
            dataFirstname.innerHTML = objStd.firstname;
            dataLastname.innerHTML = objStd.lastname;
            dataBirthdate.innerHTML = objStd.birthdate;
            dataIsActive.innerHTML = `<input class="chk-is-active" data-std-id="${objStd.id}" type="checkbox" ${objStd.isActive !== undefined && objStd.isActive ? "checked" : ""}>`;

            dataRow.appendChild(dataId);
            dataRow.appendChild(dataFirstname);
            dataRow.appendChild(dataLastname);
            dataRow.appendChild(dataBirthdate);
            dataRow.appendChild(dataIsActive);

            table.appendChild(dataRow);
        }

        // Footer section
        let currUndoIndex = 0;
        let trDataPositions = [];

        const btnRemoveClicked = () => {
            const chkIsActive = document.getElementsByClassName("chk-is-active");
            const chkActiveTrCheckboxes = [];
            const chkPrevDataPosition = [];

            let isAnyActiveCheckboxFound = false;

            for (const objChk of chkIsActive) {
                objChk.checked && chkActiveTrCheckboxes.push(objChk.parentNode.parentNode);
                chkPrevDataPosition.push(objChk.parentNode.parentNode);
            }

            for (let i = 0; i < chkActiveTrCheckboxes.length; i++)
                chkActiveTrCheckboxes[i].remove();

            if (chkActiveTrCheckboxes.length > 0)
                trDataPositions[currUndoIndex++] = Object.assign({}, chkPrevDataPosition);
            else
                alert("No selected checkbox found!");
        }

        const btnUndoClicked = () => {
            if (currUndoIndex - 1 < 0)
            {
                alert("Undo is not available!");
                return;
            }
            
            const chkIsActive = document.getElementsByClassName("chk-is-active");
            const stdTable = document.getElementById("std-table");
            const chkActiveTrCheckboxes = [];

            let isAnyActiveCheckboxFound = false;
            // Remove whole the tr's
            for (const objChk of chkIsActive)
                chkActiveTrCheckboxes.push(objChk.parentNode.parentNode);

            for (let i = 0; i < chkActiveTrCheckboxes.length; i++)
                chkActiveTrCheckboxes[i].remove();

            const previousTrData = trDataPositions[--currUndoIndex];
            
            for (let i = Object.keys(previousTrData).length - 1; i >= 0; i--)
                stdTable.firstChild.after(previousTrData[i]);
        }

        const footerRow = document.createElement("tr");
        const footerRowNum = document.createElement("td");

        const btnRemove = document.createElement("input");
        const btnUndo = document.createElement("input");

        footerRowNum.setAttribute("colspan", hasRowNum ? 6 : 7);
        footerRowNum.setAttribute("class", "footer");

        btnRemove.setAttribute("type", "button");
        btnRemove.setAttribute("value", "Remove...");
        btnRemove.addEventListener("click", btnRemoveClicked);

        btnUndo.setAttribute("type", "button");
        btnUndo.setAttribute("value", "Undo");
        btnUndo.addEventListener("click", btnUndoClicked);

        footerRowNum.appendChild(btnUndo);
        footerRowNum.appendChild(btnRemove);

        footerRow.appendChild(footerRowNum);
        table.appendChild(footerRow);

        elem.appendChild(table);
    }
}

const std = [
    new Student(17, "Ali", "Kazemi", "1989/01/01", true),
    new Student(46, "Hassan", "Zakani", "1988/04/26", false),
    new Student(32, "Akram", "Ebrahimi", "1980/06/17", false),
    new Student(175, "Setare", "Jahani", "2001/04/12", true),
    new Student(3, "Mohsen", "Musakhani", "1955/02/28", false)
];

Student.MakeTableElement(std, "lightgray", true);
