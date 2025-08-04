let container = document.querySelector(".container");

let btn = document.querySelector("button");

function drawGrid(container, gridNumber) {

    for (i = 0; i < gridNumber * gridNumber; i++) {
        let square = document.createElement('div'); 
        square.classList.add('square');   
        container.appendChild(square);

        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = 'lightblue';
        });
    }
}

drawGrid(container, 16);

btn.addEventListener("click", () => {
    let newGridNumber = parseInt(prompt("Enter number of squares per side :"));
    if (newGridNumber != null && newGridNumber <= 100 && newGridNumber > 0) {

        container.replaceChildren();
        
        for (i = 0; i < newGridNumber * newGridNumber; i++) {

            let square = document.createElement('div'); 
            square.classList.add("square");
            square.style.flex = `0 0 calc(100% / ${newGridNumber})`;


            container.appendChild(square);
            square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = 'lightblue';
            });
        }
        // let squares = document.querySelectorAll('.square');
        // squares.style.flex = `0 0 calc(100% / 64)`;



    } else {
        alert("Please Enter a number between 1-100");
    }
    
});
            
