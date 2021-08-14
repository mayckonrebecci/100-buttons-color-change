
let divBtn = document.querySelector("#div-btn");

const randomColor = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);

    return `rgb( ${r}, ${g}, ${b} )`;
};

//-----------------------------------------------------
//* This is the 1st Way.
//-----------------------------------------------------
const createBtn = () => {
    let newBtn = document.createElement("button");
    divBtn.appendChild(newBtn);
    newBtn.innerText = "CLICK";
    newBtn.setAttribute("id", "btn");   

    newBtn.addEventListener("click", function () {        
        this.style.backgroundColor = randomColor();        
    })   
}

for (let i = 0; i <= 99; i++) {
    createBtn();
}


//-----------------------------------------------------
//* This is the 2nd Way.
//-----------------------------------------------------
// for (let i = 0; i <= 99; i++) {
//     createBtn();
// }

// let newBtns = document.querySelectorAll("#btn");

// for (let newBtn of newBtns){
//     newBtn.addEventListener("click", function () {
//         newBtn.style.backgroundColor = randomColor();
//     })
// }