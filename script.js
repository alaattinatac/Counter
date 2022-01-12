const myIncrease = document.getElementById("increase")

let count = 0;

let result = document.getElementById("result")

myIncrease.addEventListener("click", function (event) {
    count += 1;
    result.innerHTML = count;
})

const myDecrease = document.getElementById("decrease")

myDecrease.addEventListener("click", function (event) {
    count =count-1;
    result.innerHTML = count;
})