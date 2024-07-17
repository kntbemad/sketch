
const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
    let boxrow = document.createElement("div");
    boxrow.classList.add("boxrow");
    for (j = 0; j < 16; j++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.addEventListener("mouseover", function(){hoverfn(box);})
        boxrow.appendChild(box);
    }
    container.appendChild(boxrow);
}

function hoverfn(box){
    box.style.backgroundColor = "black";
}