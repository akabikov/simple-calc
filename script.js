"use strict";

(function () {
    const calcScreen = document.querySelector(".screen");
    const numsButtons = document.querySelectorAll(".btn-num");
    const operButtons = document.querySelectorAll(".btn-operator");
    const equalButton = document.querySelector(".btn-equal");
    const clearButton = document.querySelector(".btn-clear");

    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    };

    let oper = "";
    let numA = "";
    let numB = "";

    numsButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            let digit = btn.dataset.num;
            displayNum(digit);
            setNum(digit);
        });
    });

    operButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            let op = btn.dataset.num;
            setOper(op);
            displayNum(op);
        });
    });

    clearButton.addEventListener("click", function () {
        clearScreen();
        reset();
    })

    equalButton.addEventListener("click", function () {
        equal();
    })


    function displayNum(str) {
        calcScreen.value += str;
    }

    function setNum(digit) {
        if (!oper) {
            numA += digit;
        } else {
            numB += digit;
        }
    }

    function setOper(op) {
        if (oper) {
            equal();
        }
        oper = op;
    }

    function clearScreen() {
        calcScreen.value = "";
    }

    function reset() {
        oper = "";
        numA = "";
        numB = "";
    }

    function calc() {
        let result = operations[oper](+numA, +numB);
        reset();
        numA = result;
        return result;
    }

    function equal() {
        clearScreen();
        displayNum(calc());
    }
})();