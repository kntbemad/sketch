const resetbtn = document.getElementById("resetbtn");
const container = document.querySelector(".container");

resetbtn.addEventListener("click", reset)

function reset(){
    let ans = prompt("Enter desired grid size (side length):", "");
    if(Number.isNaN(ans)){
        alert("That is not a valid number.");
    }
    let gridsize = parseInt(ans);
    if(!Number.isInteger(gridsize)){
        alert("Please enter a valid integer.");
    } else {
        console.log("delete");
        const element = document.getElementById("grid");
        element.remove();
        createGrid(gridsize);
    }
    
}

function createGrid(size) {
    const grid = document.createElement("div");
    grid.id = "grid";
    container.appendChild(grid);
    for (i = 0; i < size; i++) {
        let boxrow = document.createElement("div");
        boxrow.classList.add("boxrow");
        for (j = 0; j < size; j++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.style.height = container.clientWidth / size + "px";
            box.style.width = container.clientWidth / size + "px";
            box.addEventListener("mouseover", function () { hoverfn(box); })
            boxrow.appendChild(box);
        }
        grid.appendChild(boxrow);
    }
}

function hoverfn(box) {
    box.style.backgroundColor = "black";
}

createGrid(16);