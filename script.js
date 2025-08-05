let container = document.querySelector(".container");

let btn = document.querySelector("button");

function randomRGB() {
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);

    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function drawGrid(container, gridNumber) {

    for (i = 0; i < gridNumber * gridNumber; i++) {
        let square = document.createElement('div'); 
        square.classList.add('square');   
        container.appendChild(square);

        square.addEventListener("mouseover", () => {
        
            // square.style.backgroundColor = 'lightblue';

            let RandomRGB = randomRGB();

            square.style.backgroundColor = RandomRGB;

            let newOpacity = Number(square.style.opacity);
            newOpacity = newOpacity + 0.1;            

            square.style.opacity = newOpacity.toString();
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
                        
                // square.style.backgroundColor = 'lightblue';

                square.style.backgroundColor = randomRGB();

                let newOpacity = Number(square.style.opacity);
                newOpacity = newOpacity + 0.1;            

                square.style.opacity = newOpacity.toString();
            });
        }
    } else {
        alert("Please Enter a number between 1-100");
    }
    
});
            
