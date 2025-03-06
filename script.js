//your JS code here. If required.

document.getElementById("btn").addEventListener("click", function () {
    let input = document.getElementById("ip").value;
    let output = document.getElementById("output");

    if (input === "") {
        output.innerHTML = "Please enter a number.";
        return;
    }

    let num = Number(input);

    new Promise((resolve) => {
        setTimeout(() => {
            output.innerHTML = `Result: ${num}`;
            resolve(num);
        }, 2000);
    })
    .then((result) => new Promise((resolve) => {
        setTimeout(() => {
            let newResult = result * 2;
            output.innerHTML = `Result: ${newResult}`;
            resolve(newResult);
        }, 2000);
    }))
    .then((result) => new Promise((resolve) => {
        setTimeout(() => {
            let newResult = result - 3;
            output.innerHTML = `Result: ${newResult}`;
            resolve(newResult);
        }, 1000);
    }))
    .then((result) => new Promise((resolve) => {
        setTimeout(() => {
            let newResult = result / 2;
            output.innerHTML = `Result: ${newResult}`;
            resolve(newResult);
        }, 1000);
    }))
    .then((result) => new Promise((resolve) => {
        setTimeout(() => {
            let newResult = result + 10;
            output.innerHTML = `Final Result: ${newResult}`;
            resolve(newResult);
        }, 1000);
    }));
});
