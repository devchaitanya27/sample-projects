let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => { //for the forEach function you have the function as input.
    button.addEventListener("click", (p) => {
        if (p.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        } else if (p.target.innerHTML == "AC") {
            string = "";
            document.querySelector("input").value = string;
        } else {
            console.log(p.target);
            string = string + p.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
})